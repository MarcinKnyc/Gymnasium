namespace GymApp.Models
{
    public class Pass : Entity
    {
        public string PassName { get; set; } = "";
        public string PassDescription { get; set; } = "";
        public float Price { get; set; }
        public int Duration { get; set; }
        public List<PassBoughtEvent> PassBoughtEvents { get; set; } = new List<PassBoughtEvent>();
        public List<Entrance> Entrances { get; set; } = new List<Entrance>();

    }
}
