using Core.Entities.PurchaseOrder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPurchaseOrderService
    {
        Task<PurchaseOrder> AddPurchaseOrderAsync(string buyerEmail, int shippingType, string cartId, OrderAddress orderAddress);
        Task<IReadOnlyList<PurchaseOrder>> GetPurchaseOrderByUserEmailAsync(string email);
        Task<PurchaseOrder>GetPurchaseOrderByIdAsync(int id, string email);
        Task<IReadOnlyList<ShippingType>> getShippingTypes();
    }
}
