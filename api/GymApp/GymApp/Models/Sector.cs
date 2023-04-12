namespace GymApp.Models
{
    public class Sector : Entity
    {
        public String SectorName { get; set; } = "";
        public Guid? GymId { get; set; }
        public Gym? Gym { get; set; }
        public List<Entrance> Entrances { get; set; } = new List<Entrance>();
    }
}
