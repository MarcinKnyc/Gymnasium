using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GymApp.Data;
using GymApp.Models;

namespace GymApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GymsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GymsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Gyms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gym>>> GetGyms()
        {
          if (_context.Gyms == null)
          {
              return NotFound();
          }
            return await _context.Gyms.ToListAsync();
        }

        // GET: api/Gyms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gym>> GetGym(Guid id)
        {
          if (_context.Gyms == null)
          {
              return NotFound();
          }
            var gym = await _context.Gyms.FindAsync(id);

            if (gym == null)
            {
                return NotFound();
            }

            return gym;
        }

        // PUT: api/Gyms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGym(Guid id, Gym gym)
        {
            if (id != gym.Id)
            {
                return BadRequest();
            }

            _context.Entry(gym).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GymExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Gyms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Gym>> PostGym(Gym gym)
        {
          if (_context.Gyms == null)
          {
              return Problem("Entity set 'AppDbContext.Gyms'  is null.");
          }
            _context.Gyms.Add(gym);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGym", new { id = gym.Id }, gym);
        }

        // DELETE: api/Gyms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGym(Guid id)
        {
            if (_context.Gyms == null)
            {
                return NotFound();
            }
            var gym = await _context.Gyms.FindAsync(id);
            if (gym == null)
            {
                return NotFound();
            }

            _context.Gyms.Remove(gym);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GymExists(Guid id)
        {
            return (_context.Gyms?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
