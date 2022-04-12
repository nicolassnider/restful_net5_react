using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class ShoppingCartRepository : IShoppingCartRepository
    {
        private readonly IDatabase _dataBase;

        public ShoppingCartRepository(IConnectionMultiplexer redis)
        {
            _dataBase = redis.GetDatabase();
        }

        public async Task<bool> DeleteShoppingCartAsync(string shoppingCartId)
        {
           return await _dataBase.KeyDeleteAsync(shoppingCartId);
        }

        public async Task<ShoppingCart> GetShoppingCartAsync(string shoppingCartId)
        {
            var data = await _dataBase.StringGetAsync(shoppingCartId);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<ShoppingCart>(data);             
        }

        public async Task<ShoppingCart> UpdateShoppingCartAsync(ShoppingCart shoppingCart)
        {
            var status = await _dataBase.StringSetAsync(shoppingCart.Id,JsonSerializer.Serialize(shoppingCart),TimeSpan.FromDays(30));
            if (!status) return null;
            return await GetShoppingCartAsync(shoppingCart.Id);
        }
    }
}
