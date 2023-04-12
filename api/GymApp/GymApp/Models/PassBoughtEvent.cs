namespace GymApp.Models
{
    public class PassBoughtEvent : Entity
    {
        public DateTime DateTime { get; set; }
        public Guid PassId { get; set; }
        public Pass Pass { get; set; }
        public Guid ClientId { get; set; }
        public Client Client { get; set; }

    }
}
