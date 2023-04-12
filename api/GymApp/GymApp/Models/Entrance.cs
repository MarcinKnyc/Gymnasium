namespace GymApp.Models
{
    public class Entrance : Entity
    {
        public Guid? PassId { get; set; }
        public Pass? Pass { get; set; }
        public Guid? SectorId { get; set; }
        public Sector? Sector { get; set; }
        public List<EntranceEvent> EntranceEvents { get; set; } = new List<EntranceEvent>();
    }
}
