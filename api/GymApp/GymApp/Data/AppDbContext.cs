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
    }
}
