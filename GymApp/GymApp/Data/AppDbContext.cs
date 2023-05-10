using GymApp.Models;
using Microsoft.EntityFrameworkCore;

namespace GymApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :
            base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }
        public DbSet<Gym> Gyms { get; set; }
        public DbSet<GymApp.Models.Client>? Client_1 { get; set; }
        public DbSet<GymApp.Models.EntranceEvent>? EntranceEvent_1 { get; set; }
        public DbSet<GymApp.Models.Entrance>? Entrance_1 { get; set; }
        public DbSet<GymApp.Models.Pass>? Pass_1 { get; set; }
        public DbSet<GymApp.Models.Receptionist>? Receptionist_1 { get; set; }
        public DbSet<GymApp.Models.Sector>? Sector_1 { get; set; }
        public DbSet<GymApp.Models.PassBoughtEvent>? PassBoughtEvent_1 { get; set; }
    }
}
