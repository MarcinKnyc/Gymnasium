using GymApp.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GymApp.Data;

public class GymUserContext : IdentityDbContext<GymUser>
{
    public GymUserContext(DbContextOptions<GymUserContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        List<string> defaultRoles = new()
        {
            "Admin",
            "Receptionist",
            "Customer"
        };

        // Seed default roles
        foreach (var role in defaultRoles)
        {
            builder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = role.ToString(),
                NormalizedName = role.ToString().ToUpper()
            });
        }
    }


}
