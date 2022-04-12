using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    public class ShoppingCartController : BaseApiController
    {
        private readonly IShoppingCartRepository _shoppingCart;
        public ShoppingCartController(IShoppingCartRepository shoppingCart)
        {
            _shoppingCart = shoppingCart;
        }

        [HttpGet]
        public async Task<ActionResult<ShoppingCart>> GetShoppingCartById(string id)
        {
            var cart = await _shoppingCart.GetShoppingCartAsync(id);
            return Ok(cart??new ShoppingCart(id));
        }
        [HttpPost]
        public async Task<ActionResult<ShoppingCart>> updateShoppingCart(ShoppingCart cartParam)
        {
            var cartUpdated = await _shoppingCart.UpdateShoppingCartAsync(cartParam);
            return Ok(cartUpdated);
        }
        [HttpDelete]
        public async Task DeleteShoppingCart(string id)
        {
            await _shoppingCart.DeleteShoppingCartAsync(id);
        }
    }
}
