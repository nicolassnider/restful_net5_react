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

        public UserController(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService, IMapper mapper, IPasswordHasher<User> passwordHasher, IGenericSecurityRepository<User> securityRepository)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _securityRepository = securityRepository;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null)
            {
                return Unauthorized(new CodeErrorResponse(401));
            }
            var result= await _signInManager.CheckPasswordSignInAsync(user,loginDto.Password,false);
            if (!result.Succeeded)
            {
                return Unauthorized(new CodeErrorResponse(401));
            }
            return new UserDto
            {
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
                FirstName = user.FirstName,
                LastName = user.LastName
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
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                Token = _tokenService.CreateToken(user),
                Email = registerDto.Email,
                UserName = registerDto.UserName
            };
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetUser()
        {
            /*var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var user = await _userManager.FindByEmailAsync(email);*/

            var user = await _userManager.SearchUserAsync(HttpContext.User);

            return new UserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }
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
            user.PasswordHash=_passwordHasher.HashPassword(user, registerDto.Password);

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                return BadRequest(new CodeErrorResponse(400, "Could not update user"));
            }

            return new UserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
                Image = user.Image,

            };
            
        }
        [HttpGet("pagination")]
        public async Task<ActionResult<Pagination<UserDto>>> GetUsers([FromQuery]UserSpecificationParams userParams)
        {
            var spec = new UserSpecification(userParams);
            var users =await _securityRepository.GetAllWithSpec(spec);
            var specCount = new UserForCountingSpecification(userParams);
            var usersTotal = await _securityRepository.CountAsync(spec);
            var rounded = Math.Ceiling(Convert.ToDecimal(usersTotal) / userParams.PageSize);
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<User>, IReadOnlyList<UserDto>>(users);
            return Ok(new Pagination<UserDto>
            {
                Count = usersTotal,
                Data = data,
                PageCount=totalPages,
                PageIndex=userParams.PageIndex,
                PageSize=userParams.PageSize
            });
        }
    }

}
