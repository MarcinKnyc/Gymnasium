namespace GymApp.Models
{
    public class Receptionist : Entity
    {
        public string Name { get; set; } = "";
        public string Surname { get; set; } = "";
        public virtual ICollection<Gym> Gyms { get; set; } = new HashSet<Gym>();

    }
}
