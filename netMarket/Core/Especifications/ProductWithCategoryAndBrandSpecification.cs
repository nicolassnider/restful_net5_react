using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Especifications
{
    public class ProductWithCategoryAndBrandSpecification : BaseSpecification<Product>
    {
        public ProductWithCategoryAndBrandSpecification(ProductSpecificationParam productParams)
            : base(x => (!productParams.Brand.HasValue || x.BrandId == productParams.Brand) 
            &&          (!productParams.Category.HasValue||x.CategoryId== productParams.Category))     
        {
            AddInclude(p => p.Category);
            AddInclude(p => p.Brand);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1),productParams.PageSize);
            if (!string.IsNullOrEmpty(productParams.Sort))
            {
                switch (productParams.Sort)
                {
                    case "price":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    case "name":
                        AddOrderBy(p => p.Name);
                        break;
                    case "nameDesc":
                        AddOrderByDescending(p => p.Name);
                        break;
                    default:
                        AddOrderBy(p => p.Id);
                        break;
                }
            }
            //AddOrderBy(p => p.Name);
        }
        /*public ProductWithCategoryAndBrandSpecification(string productName): base(x=>x.Name== productName)
        {

        }*/
        public ProductWithCategoryAndBrandSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(p => p.Category);
            AddInclude(p => p.Brand);
        }
    }
}
