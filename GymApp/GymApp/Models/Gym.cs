﻿namespace GymApp.Models
{
    public class Gym : Entity
    {
        public string Name { get; set; } = "";
        public string City { get; set; } = "";
        public string Address { get; set; } = "";
        public List<Sector> Sectors { get; set; } = new List<Sector>();
        public List<Receptionist> Receptionists { get; set; } = new List<Receptionist>();
    }
}
