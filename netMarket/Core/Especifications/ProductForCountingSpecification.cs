using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Especifications
{
    public class ProductForCountingSpecification : BaseSpecification<Product>
    {
        public ProductForCountingSpecification(ProductSpecificationParam productParams)
            : base(x =>
            (string.IsNullOrEmpty(productParams.Search) || x.Name.Contains(productParams.Search)) &&
            (!productParams.Brand.HasValue || x.BrandId == productParams.Brand) &&
            (!productParams.Category.HasValue || x.CategoryId == productParams.Category))
        {
        }
    }
}
