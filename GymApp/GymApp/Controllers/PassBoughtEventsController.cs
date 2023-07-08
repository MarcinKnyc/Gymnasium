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
    public class PassBoughtEventsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PassBoughtEventsController(AppDbContext context)
        {
            _context = context;
        }

        // get all the active passes
        [HttpGet("GetActivePasses/{clientId}")]
        public async Task<ActionResult<IEnumerable<PassBoughtEvent>>> GetActivePasses(Guid clientId)
        {
            var activePassBoughtEvents = await _context.Client_1
                .Where(c => c.Id == clientId)
                .SelectMany(c => c.PassBoughtEvents)
                .Include(pbe => pbe.Pass)
                .Where(pbe => DateTime.UtcNow < pbe.DateTime.AddDays(pbe.Pass.Duration * pbe.refresh))
                .ToListAsync();

            return Ok(activePassBoughtEvents);
        }



        //reseting the Pass
        [HttpPut("DeactivatePass/{passBoughtEventId}")]
        public async Task<ActionResult<PassBoughtEvent>> DeactivatePass(Guid passBoughtEventId)        
        {
            var passBoughtEvent = await _context.PassBoughtEvent_1.FirstOrDefaultAsync(pbe => pbe.Id == passBoughtEventId);
            if (passBoughtEvent == null)
            {
                return NotFound();
            }

            passBoughtEvent.refresh = 0;
            await _context.SaveChangesAsync();

            return Ok(passBoughtEvent);
        }

        // Extend the pass validity
        [HttpPut("ExtendPassValidity/{passBoughtEventId}")]
        public async Task<ActionResult<PassBoughtEvent>> ExtendPassValidity(Guid passBoughtEventId, int extension)
        {
            var passBoughtEvent = await _context.PassBoughtEvent_1.FirstOrDefaultAsync(pbe => pbe.Id == passBoughtEventId);
            if (passBoughtEvent == null)
            {
                return NotFound();
            }

            passBoughtEvent.refresh += extension;
            await _context.SaveChangesAsync();

            return Ok(passBoughtEvent);
        }

        // GET: api/PassBoughtEvents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassBoughtEvent>>> GetPassBoughtEvent_1()
        {
            if (_context.PassBoughtEvent_1 == null)
            {
                return NotFound();
            }
            return await _context.PassBoughtEvent_1.ToListAsync();
        }

        // GET: api/PassBoughtEvents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassBoughtEvent>> GetPassBoughtEvent(Guid id)
        {
            if (_context.PassBoughtEvent_1 == null)
            {
                return NotFound();
            }
            var passBoughtEvent = await _context.PassBoughtEvent_1.FindAsync(id);

            if (passBoughtEvent == null)
            {
                return NotFound();
            }

            return passBoughtEvent;
        }

        // PUT: api/PassBoughtEvents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassBoughtEvent(Guid id, PassBoughtEvent passBoughtEvent)
        {
            if (id != passBoughtEvent.Id)
            {
                return BadRequest();
            }

            _context.Entry(passBoughtEvent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassBoughtEventExists(id))
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

        // POST: api/PassBoughtEvents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassBoughtEvent>> PostPassBoughtEvent(PassBoughtEvent passBoughtEvent)
        {
            if (_context.PassBoughtEvent_1 == null)
            {
                return Problem("Entity set 'AppDbContext.PassBoughtEvent_1'  is null.");
            }
            _context.PassBoughtEvent_1.Add(passBoughtEvent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassBoughtEvent", new { id = passBoughtEvent.Id }, passBoughtEvent);
        }

        // DELETE: api/PassBoughtEvents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassBoughtEvent(Guid id)
        {
            if (_context.PassBoughtEvent_1 == null)
            {
                return NotFound();
            }
            var passBoughtEvent = await _context.PassBoughtEvent_1.FindAsync(id);
            if (passBoughtEvent == null)
            {
                return NotFound();
            }

            _context.PassBoughtEvent_1.Remove(passBoughtEvent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassBoughtEventExists(Guid id)
        {
            return (_context.PassBoughtEvent_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
