using Microsoft.AspNetCore.Identity;

namespace GymApp.Models
{
    public class Client : Entity
    {
        public string Name { get; set; } = "";
        public string Surname { get; set; } = "";
        public string PhoneNumber { get; set; } = "";
        public List<PassBoughtEvent> PassBoughtEvents { get; set; } = new List<PassBoughtEvent>();
        public List<EntranceEvent> EntranceEvents { get; set; } = new List<EntranceEvent>();
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
}
