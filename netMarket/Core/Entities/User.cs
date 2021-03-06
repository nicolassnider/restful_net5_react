using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class User : IdentityUser 
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public Address Address { get; set; }
        public string Image { get; set; }
    }
}
