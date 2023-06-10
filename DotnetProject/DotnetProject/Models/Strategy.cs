namespace DotnetProject.Models
{
    public class Strategy
    {
        public int Id { get; set; }
        public string Coin { get; set; }
        public decimal BuyPrice { get; set; }
        public decimal SellPrice { get; set; }
        public string Comment { get; set; }
    }
}
