using System.Text.Json.Serialization;

namespace GymApp.Models
{
    public class PassBoughtEvent : Entity
    {
        public DateTime DateTime { get; set; }
        public Guid PassId { get; set; }
        [JsonIgnore]
        public Pass? Pass { get; set; }
        public Guid ClientId { get; set; }
        [JsonIgnore]
        public Client? Client { get; set; }
        public int refresh { get; set; }
    }
}
