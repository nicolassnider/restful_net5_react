using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Especifications
{
    public class UserSpecification : BaseSpecification<User>
    {
        public UserSpecification(UserSpecificationParams userParams)
        : base(x =>
            (string.IsNullOrEmpty(userParams.Search) || x.FirstName.Contains(userParams.Search)) &&
            (string.IsNullOrEmpty(userParams.FirstName) || x.FirstName.Contains(userParams.FirstName)) &&
            (string.IsNullOrEmpty(userParams.LastName) || x.LastName.Contains(userParams.LastName))
        )
        {
            ApplyPaging(userParams.PageSize * (userParams.PageIndex - 1), userParams.PageSize);
            if (!string.IsNullOrEmpty(userParams.Sort))
            {
                switch (userParams.Sort)
                {
                    case "firstNameAsc":
                        AddOrderBy(u => u.FirstName);
                        break;
                    case "firstNameDesc":
                        AddOrderByDescending(u => u.FirstName);
                        break;
                    case "lastNameAsc":
                        AddOrderBy(u => u.LastName);
                        break;
                    case "lastNameDesc":
                        AddOrderByDescending(u => u.LastName);
                        break;
                    case "emailAsc":
                        AddOrderBy(u => u.Email);
                        break;
                    case "emailDesc":
                        AddOrderByDescending(u => u.Email);
                        break;
                    default: AddOrderBy(u => u.Id);
                        break;
                }
            }
        }

    }
}
