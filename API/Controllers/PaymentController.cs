using System;

using API.Data;
using API.DTOs;
using API.Entities.OrderAggregate;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Stripe;

namespace API.Controllers
{
    public class PaymentController: BaseApiController
    {
        private readonly StoreContext _context;
         private readonly PaymentService  _paymentService;
        private readonly IConfiguration _config;

        public PaymentController(PaymentService paymentService, StoreContext context , IConfiguration config)
        {
            _paymentService = paymentService;
            _context = context;
            _config = config;

            
        }


        [Authorize]
        [HttpPost]
        public async Task<ActionResult<BasketDto>> CreateOrUpdatePaymentIntent()
        {
            var basket = await _context.Baskets
                .RetrieveBasketWithItems(User.Identity.Name)
                .FirstOrDefaultAsync();

            if (basket == null) return NotFound();

            var intent = await _paymentService.CreateorUpdatePaymentIntent(basket);

            if (intent == null) return BadRequest(new ProblemDetails { Title = "Problem creating payment intent" });

            basket.PaymentIntentId = basket.PaymentIntentId ?? intent.Id;
            basket.ClientSecret = basket.ClientSecret ?? intent.ClientSecret;

            _context.Update(basket);

            var result = await _context.SaveChangesAsync() > 0;

            if (!result) return BadRequest(new ProblemDetails { Title = "Problem updating basket with intent" });

            return basket.MapBaskettoDto();
        }

          [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"],
                _config["StripeSettings:WhSecret"]);

            var charge = (Charge)stripeEvent.Data.Object;

            var order = await _context.Orders.FirstOrDefaultAsync(x => 
                x.PaymentIntentId == charge.PaymentIntentId);

            if (charge.Status == "succeeded") order.OrderStatus = OrderStatus.PaymentReceived;

            await _context.SaveChangesAsync();

            return new EmptyResult();
        }

        [Authorize(Roles= "Admin")]
        [HttpGet]
         public async Task<IActionResult> GetPayments()
    {
        try
        {
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];
            var options = new PaymentIntentListOptions
            {
                Limit = 10, // You can set the limit as per your requirements
            };

            var service = new PaymentIntentService();
            var paymentIntents = await service.ListAsync(options);
            var payments = new List<PaymentInfo>();
     
     
        foreach (var paymentIntent in paymentIntents)
        {
                payments.Add(new PaymentInfo
                {
                    Id = paymentIntent.Id,
                    Amount = paymentIntent.Amount,
                    Created = paymentIntent.Created,
                    ClientSecret = paymentIntent.ClientSecret,
                    Currency = paymentIntent.Currency,
                    PaymentMethodType = paymentIntent.PaymentMethodTypes.FirstOrDefault()
                });
        
        }

        return Ok(payments);
    
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    }

}