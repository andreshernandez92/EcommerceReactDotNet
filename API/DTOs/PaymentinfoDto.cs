namespace API.DTOs
{
 
public class PaymentInfo
{
    public string Id { get; set; }
    public long Amount { get; set; }
    public DateTime Created { get; set; }
    public string ClientSecret { get; set; }
    public string Currency { get; set; }
    public string PaymentMethodType { get; set; }
}
}