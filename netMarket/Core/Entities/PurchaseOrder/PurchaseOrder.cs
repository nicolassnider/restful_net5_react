using System;
using System.Collections.Generic;

namespace Core.Entities.PurchaseOrder
{
    public class PurchaseOrder : BaseClass
    {
        public PurchaseOrder()
        {
        }

        public PurchaseOrder(string buyerEmail, OrderAddress purchaseOrderAddress, ShippingType shippingType, IReadOnlyList<OrderItem> orderItems, decimal subtotal)
        {
            BuyerEmail = buyerEmail;
            PurchaseOrderAddress = purchaseOrderAddress;
            ShippingType = shippingType;
            OrderItems = orderItems;
            Subtotal = subtotal;
        }

        public string BuyerEmail { get; set; }
        public DateTimeOffset PurchaseOrderDate { get; set; } = DateTimeOffset.Now;
        public OrderAddress PurchaseOrderAddress { get; set; }
        public ShippingType ShippingType { get; set; }
        public IReadOnlyList<OrderItem> OrderItems { get; set; }
        public decimal Subtotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PayAttemptId { get; set; }
        public decimal GetTotal()
        {
            return Subtotal + ShippingType.Price;
        }

    }
}
