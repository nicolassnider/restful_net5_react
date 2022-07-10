namespace Core.Entities.PurchaseOrder
{
    public class OrderedProductItem
    {
        public OrderedProductItem()
        {

        }
        public OrderedProductItem(string productItemId, string productName, string imageUrl)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            ImageUrl = imageUrl;
        }

        public string ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string ImageUrl { get; set; }
    }
}
