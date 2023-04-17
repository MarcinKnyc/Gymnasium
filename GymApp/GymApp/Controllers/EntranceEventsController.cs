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
    public class EntranceEventsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EntranceEventsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/EntranceEvents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EntranceEvent>>> GetEntranceEvent_1()
        {
          if (_context.EntranceEvent_1 == null)
          {
              return NotFound();
          }
            return await _context.EntranceEvent_1.ToListAsync();
        }

        // GET: api/EntranceEvents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EntranceEvent>> GetEntranceEvent(Guid id)
        {
          if (_context.EntranceEvent_1 == null)
          {
              return NotFound();
          }
            var entranceEvent = await _context.EntranceEvent_1.FindAsync(id);

            if (entranceEvent == null)
            {
                return NotFound();
            }

            return entranceEvent;
        }

        // PUT: api/EntranceEvents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEntranceEvent(Guid id, EntranceEvent entranceEvent)
        {
            if (id != entranceEvent.Id)
            {
                return BadRequest();
            }

            _context.Entry(entranceEvent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntranceEventExists(id))
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

        // POST: api/EntranceEvents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EntranceEvent>> PostEntranceEvent(EntranceEvent entranceEvent)
        {
          if (_context.EntranceEvent_1 == null)
          {
              return Problem("Entity set 'AppDbContext.EntranceEvent_1'  is null.");
          }
            _context.EntranceEvent_1.Add(entranceEvent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEntranceEvent", new { id = entranceEvent.Id }, entranceEvent);
        }

        // DELETE: api/EntranceEvents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntranceEvent(Guid id)
        {
            if (_context.EntranceEvent_1 == null)
            {
                return NotFound();
            }
            var entranceEvent = await _context.EntranceEvent_1.FindAsync(id);
            if (entranceEvent == null)
            {
                return NotFound();
            }

            _context.EntranceEvent_1.Remove(entranceEvent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EntranceEventExists(Guid id)
        {
            return (_context.EntranceEvent_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
