using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace GymApp.Areas.Identity.Data;

// Add profile data for application users by adding properties to the GymUser class
public class GymUserDAO
{
    public string email { get; set; }
    public string plainTextPassword { get; set; }
    public List<string> userRoles { get; set; } = new();//client, receptionist, admin
}

