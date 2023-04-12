namespace GymApp.Models
{
    public class EntranceEvent : Entity
    {
        public DateTime DateTime { get; set; }
        public Guid ClientId { get; set; }
        public Client Client { get; set; }
        public Guid EntranceId { get; set; }
        public Entrance Entrance { get; set; }

    }
}
