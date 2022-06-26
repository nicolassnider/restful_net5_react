using Core.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class SecurityDbContextData
    {
        public static async Task SeedUserAsync(UserManager<User> userManager,RoleManager<IdentityRole> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    FirstName = "Admin",
                    LastName = "Admin",
                    UserName = "admin",
                    Email = "nicolas.snider@gmail.com",
                    Address = new Address
                    {
                        Street = "street 123",
                        City = "City",
                        ZipCode = "123456",
                        Apartment = "A",
                    }
                };
                await userManager.CreateAsync(user,"Admin!1234!");
            }
            if (!roleManager.Roles.Any())
            {
                var role = new IdentityRole
                {
                    Name = "Admin"
                };
                await roleManager.CreateAsync(role);
            }
        }
    }
}
