using AutoMapper;
using Core.Entities;
using Core.Especifications;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApi.Dtos;
using WebApi.Errors;
using WebApi.Extensions;

namespace WebApi.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IGenericSecurityRepository<User> _securityRepository;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserController(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService, IMapper mapper, IPasswordHasher<User> passwordHasher, IGenericSecurityRepository<User> securityRepository, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _securityRepository = securityRepository;
            _roleManager = roleManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null)
            {
                return Unauthorized(new CodeErrorResponse(401,"Inexistent user"));
            }
            var result= await _signInManager.CheckPasswordSignInAsync(user,loginDto.Password,false);
            if (!result.Succeeded)
            {
                return Unauthorized(new CodeErrorResponse(401,"Invalid credentials"));
            }
            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                Id = user.Id,
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user,roles),
                FirstName = user.FirstName,
                LastName = user.LastName,
                Image=user.Image,
                Admin = roles.Contains("Admin") ? true : false
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new User
            {
                Email = registerDto.Email,
                UserName = registerDto.UserName,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName
            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest(new CodeErrorResponse(400));
            }
            return new UserDto
            {
                Id=user.Id,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                Token = _tokenService.CreateToken(user,null),
                Email = registerDto.Email,
                UserName = registerDto.UserName,
                Admin=false
            };
        }
        [Authorize(Roles ="Admin")]
        [HttpPut("update/{id}")]
        public async Task<ActionResult<UserDto>> Update(string id, RegisterDto registerDto)
        {
            var user = await _userManager.FindByEmailAsync(registerDto.Email);
            if (user == null)
            {
                return NotFound(new CodeErrorResponse(404, "User not found"));
            }
            user.FirstName = registerDto.FirstName;
            user.LastName = registerDto.LastName;
            user.Image = registerDto.Image;
            if (string.IsNullOrEmpty(registerDto.Password))
            {
                user.PasswordHash = _passwordHasher.HashPassword(user, registerDto.Password);
            }

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                return BadRequest(new CodeErrorResponse(400, "Could not update user"));
            }
            var roles = await _userManager.GetRolesAsync(user);

            return new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user, roles),
                Image = user.Image,
                Admin = roles.Contains("Admin") ? true : false

            };

        }
        [Authorize(Roles ="Admin")]
        [HttpGet("pagination")]
        public async Task<ActionResult<Pagination<UserDto>>> GetUsers([FromQuery] UserSpecificationParams userParams)
        {
            var spec = new UserSpecification(userParams);
            var users = await _securityRepository.GetAllWithSpec(spec);
            var specCount = new UserForCountingSpecification(userParams);
            var usersTotal = await _securityRepository.CountAsync(spec);
            var rounded = Math.Ceiling(Convert.ToDecimal(usersTotal) / userParams.PageSize);
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<User>, IReadOnlyList<UserDto>>(users);
            return Ok(new Pagination<UserDto>
            {
                Count = usersTotal,
                Data = data,
                PageCount = totalPages,
                PageIndex = userParams.PageIndex,
                PageSize = userParams.PageSize
            });
        }
        [HttpPut("role/{id}")]
        public async Task<ActionResult<UserDto>> UpdateRole(string id, RoleDto roleParam)
        {
            var role = await _roleManager.FindByNameAsync(roleParam.Name);
            if (role == null)
            {
                return NotFound(new CodeErrorResponse(404, "Role not found"));
            }
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound(new CodeErrorResponse(404, "User not found"));
            }
            var userDto = _mapper.Map<User, UserDto>(user);
            if (roleParam.Status)
            {
                var result = await _userManager.AddToRoleAsync(user, roleParam.Name);
                if (result.Succeeded)
                {
                    userDto.Admin = true;
                }
                if (result.Errors.Any())
                {
                    if (result.Errors.Where(x => x.Code == "UserAlreadyInRole").Any())
                    {
                        userDto.Admin = true;
                    }
                }
            }
            else
            {
                var result = await _userManager.RemoveFromRoleAsync(user, roleParam.Name);
                if (result.Succeeded)
                {
                    userDto.Admin = false;
                }
            }

            if (userDto.Admin)
            {
                var roles = new List<string>();
                roles.Add("Admin");
                userDto.Token = _tokenService.CreateToken(user, roles);
            }
            else
            {
                userDto.Token = _tokenService.CreateToken(user, null);
            }
            return userDto;

        }
        [Authorize(Roles ="Admin")]
        [HttpGet("account/{id}")]
        public async Task<ActionResult<UserDto>> GetUserById(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if(user == null)
            {
                return NotFound(new CodeErrorResponse(404, "User not Found"));
            }
            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                UserName = user.UserName,
                Image = user.Image,
                Admin = roles.Contains("Admin") ? true : false,
            };
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetUser()
        {
            /*var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var user = await _userManager.FindByEmailAsync(email);*/

            var user = await _userManager.SearchUserAsync(HttpContext.User);
            var roles = await _userManager.GetRolesAsync(user);

            return new UserDto
            {
                Id=user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                UserName = user.UserName,
                Image= user.Image,
                Token = _tokenService.CreateToken(user,roles),
                Admin = roles.Contains("Admin") ? true : false               
            };
        }
        [Authorize]
        [HttpGet("validateemail")]
        public async Task<ActionResult<bool>> ValidateEmail([FromQuery]string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user==null) return false;
            return true;
        }
        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDto>> GetAddress()
        {
            /*var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var user = await _userManager.FindByEmailAsync(email);*/
            var user = await _userManager.SearchUserWithAddressAsync(HttpContext.User);
            return _mapper.Map<Address, AddressDto>(user.Address);
        }     
        
        
    }

}
