namespace GymApp.Models
{
    public class Receptionist : Entity
    {
        public string Name { get; set; } = "";
        public string Surname { get; set; } = "";
        public List<Gym> Gyms { get; set; } = new List<Gym>();
    }
}
