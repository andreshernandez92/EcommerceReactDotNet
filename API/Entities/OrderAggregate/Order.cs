using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities.OrderAggregate
{
    public class Order
    {
        public int Id { get; set; }

        public string BuyerId { get; set; }

        public ShippingAddress ShippingAddress{ get; set; }

        public DateTime OrderDate { get; set; } =DateTime.UtcNow;

        public List<OrderItem> OrderItems  { get; set; }

        public decimal Subtotal { get; set; }

        public decimal DeliveryFee { get; set; }

        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;

        public string PaymentIntentId { get; set; }


        public decimal GetTotal()
        {
            return Subtotal + DeliveryFee;
        }


    }
}