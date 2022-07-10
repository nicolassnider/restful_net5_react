using Core.Entities;
using Core.Entities.PurchaseOrder;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class MarketDbContextData
    {
        public static async Task LoadDataAsync(MarketDbContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                //carga inicial de datos
                if (!context.Brand.Any())
                {
                    var brandData = File.ReadAllText("../BusinessLogic/LoadData/brand.json");
                    var brands = JsonSerializer.Deserialize<List<Brand>>(brandData);

                    foreach (var brand in brands)
                    {
                        context.Brand.Add(brand);
                    }
                    await context.SaveChangesAsync();

                }

                if (!context.Category.Any())
                {
                    var categoryData = File.ReadAllText("../BusinessLogic/LoadData/category.json");
                    var categories = JsonSerializer.Deserialize<List<Category>>(categoryData);

                    foreach (var category in categories)
                    {
                        context.Category.Add(category);
                    }
                    await context.SaveChangesAsync();

                }
                if (!context.Product.Any())
                {
                    var productData = File.ReadAllText("../BusinessLogic/LoadData/product.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productData);

                    foreach (var product in products)
                    {
                        context.Product.Add(product);
                    }
                    await context.SaveChangesAsync();

                }
                if (!context.ShippingTypes.Any())
                {
                    var shippingTypeData = File.ReadAllText("../BusinessLogic/LoadData/shippingTypes.json");
                    var shippingTypes = JsonSerializer.Deserialize<List<ShippingType>>(shippingTypeData);

                    foreach (var shippingType in shippingTypes)
                    {
                        context.ShippingTypes.Add(shippingType);
                    }
                    await context.SaveChangesAsync();

                }
            }
            catch (Exception e)
            {
                var logger = loggerFactory.CreateLogger<MarketDbContextData>();
                logger.LogError(e.Message);                
            }
        }
    }
}
