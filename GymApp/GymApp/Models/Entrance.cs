using System.Text.Json.Serialization;
namespace GymApp.Models
{
    public class Entrance : Entity
    {
        public Guid PassId { get; set; }
        [JsonIgnore]
        public Pass? Pass { get; set; }
        public Guid SectorId { get; set; }
        [JsonIgnore]
        public Sector? Sector { get; set; }
        public List<EntranceEvent> EntranceEvents { get; set; } = new List<EntranceEvent>();
    }
}
