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
    public class SectorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SectorsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Sectors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sector>>> GetSector_1()
        {
          if (_context.Sector_1 == null)
          {
              return NotFound();
          }
            return await _context.Sector_1.ToListAsync();
        }

        // GET: api/Sectors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sector>> GetSector(Guid id)
        {
          if (_context.Sector_1 == null)
          {
              return NotFound();
          }
            var sector = await _context.Sector_1.FindAsync(id);

            if (sector == null)
            {
                return NotFound();
            }

            return sector;
        }

        // PUT: api/Sectors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSector(Guid id, Sector sector)
        {
            if (id != sector.Id)
            {
                return BadRequest();
            }

            _context.Entry(sector).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SectorExists(id))
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

        // POST: api/Sectors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sector>> PostSector(Sector sector)
        {
          if (_context.Sector_1 == null)
          {
              return Problem("Entity set 'AppDbContext.Sector_1'  is null.");
          }
            _context.Sector_1.Add(sector);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSector", new { id = sector.Id }, sector);
        }

        // DELETE: api/Sectors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSector(Guid id)
        {
            if (_context.Sector_1 == null)
            {
                return NotFound();
            }
            var sector = await _context.Sector_1.FindAsync(id);
            if (sector == null)
            {
                return NotFound();
            }

            _context.Sector_1.Remove(sector);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SectorExists(Guid id)
        {
            return (_context.Sector_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
