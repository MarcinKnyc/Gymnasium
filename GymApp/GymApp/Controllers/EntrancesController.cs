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
    public class EntrancesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EntrancesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Entrances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entrance>>> GetEntrance_1()
        {
          if (_context.Entrance_1 == null)
          {
              return NotFound();
          }
            return await _context.Entrance_1.ToListAsync();
        }

        // GET: api/Entrances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Entrance>> GetEntrance(Guid id)
        {
          if (_context.Entrance_1 == null)
          {
              return NotFound();
          }
            var entrance = await _context.Entrance_1.FindAsync(id);

            if (entrance == null)
            {
                return NotFound();
            }

            return entrance;
        }

        // PUT: api/Entrances/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEntrance(Guid id, Entrance entrance)
        {
            if (id != entrance.Id)
            {
                return BadRequest();
            }

            _context.Entry(entrance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntranceExists(id))
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

        // POST: api/Entrances
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Entrance>> PostEntrance(Entrance entrance)
        {
          if (_context.Entrance_1 == null)
          {
              return Problem("Entity set 'AppDbContext.Entrance_1'  is null.");
          }
            _context.Entrance_1.Add(entrance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEntrance", new { id = entrance.Id }, entrance);
        }

        // DELETE: api/Entrances/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntrance(Guid id)
        {
            if (_context.Entrance_1 == null)
            {
                return NotFound();
            }
            var entrance = await _context.Entrance_1.FindAsync(id);
            if (entrance == null)
            {
                return NotFound();
            }

            _context.Entrance_1.Remove(entrance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EntranceExists(Guid id)
        {
            return (_context.Entrance_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
