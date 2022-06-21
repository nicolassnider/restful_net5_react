using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Especifications
{
    internal class UserForCountingSpecification : BaseSpecification<User>
    {
        public UserForCountingSpecification(UserSpecificationParams userParams)
            : base(x =>
            (string.IsNullOrEmpty(userParams.Search) || x.FirstName.Contains(userParams.Search)) &&
            (string.IsNullOrEmpty(userParams.FirstName) || x.FirstName.Contains(userParams.FirstName)) &&
            (string.IsNullOrEmpty(userParams.LastName) || x.LastName.Contains(userParams.LastName))
            )
        {

        }
    }
}
