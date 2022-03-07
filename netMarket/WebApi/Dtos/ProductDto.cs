using Microsoft.AspNetCore.Mvc;

namespace WebApi.Dtos
{
    public class ProductDto : Controller
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Stock { get; set; }
        public string BrandName { get; set; }
        public decimal Price { get; set; }
        public string CategoryName { get; set; }
    }
}
