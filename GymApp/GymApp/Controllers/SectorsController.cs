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
        // get all the active sectors
        [HttpGet("GetActiveSectors/{clientId}")]
        public async Task<ActionResult<IEnumerable<PassBoughtEvent>>> GetAllowedSectors(Guid clientId)
        {
            List<Sector> activeSectors = await getActiveSectors(clientId);

            return Ok(activeSectors);
        }

        // check one specific sector ID if it's active for a given clientID
        [HttpGet("CheckIfActive")]
        public async Task<ActionResult<bool>> GetAllowedSectors(Guid clientId, Guid sectorId)
        {
            List<Sector> activeSectors = await getActiveSectors(clientId);
            bool isActive = activeSectors.Select(c=>c.Id).Contains(sectorId);

            return Ok(isActive);
        }

        private async Task<List<Sector>> getActiveSectors(Guid clientId)
        {
            //from PassBoughtEventsController
            var activePassBoughtEvents = await _context.Client_1
                .Where(c => c.Id == clientId)
                .SelectMany(c => c.PassBoughtEvents)
                .Include(pbe => pbe.Pass)
                .Where(pbe => DateTime.UtcNow < pbe.DateTime.AddDays(pbe.Pass.Duration * pbe.refresh))
                .ToListAsync();

            List<Guid> activePassGuids = activePassBoughtEvents.Select(item => item.PassId).ToList();

            var allSectorsWithEntrances = await _context.Sector_1
            .Include(c => c.Entrances)
            .ToListAsync();

            List<Sector> activeSectors = new();

            foreach (var sector in allSectorsWithEntrances)
            {
                bool isActive = false;
                foreach (var entrance in sector.Entrances)
                {
                    if (activePassGuids.Contains(entrance.PassId))
                    {
                        isActive = true;
                    }

                }
                if (isActive)
                {
                    activeSectors.Add(sector);
                }
            }

            return activeSectors;
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
