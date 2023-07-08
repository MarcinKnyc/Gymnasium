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
    public class ReceptionistsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReceptionistsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Receptionists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Receptionist>>> GetReceptionist_1()
        {
          if (_context.Receptionist_1 == null)
          {
              return NotFound();
          }
            return await _context.Receptionist_1.ToListAsync();
        }

        // GET: api/Receptionists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Receptionist>> GetReceptionist(Guid id)
        {
          if (_context.Receptionist_1 == null)
          {
              return NotFound();
          }
            var receptionist = await _context.Receptionist_1.FindAsync(id);

            if (receptionist == null)
            {
                return NotFound();
            }

            return receptionist;
        }

        // PUT: api/Receptionists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReceptionist(Guid id, Receptionist receptionist)
        {
            if (id != receptionist.Id)
            {
                return BadRequest();
            }

            _context.Entry(receptionist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReceptionistExists(id))
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

        // POST: api/Receptionists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Receptionist>> PostReceptionist(Receptionist receptionist)
        {
          if (_context.Receptionist_1 == null)
          {
              return Problem("Entity set 'AppDbContext.Receptionist_1'  is null.");
          }
            _context.Receptionist_1.Add(receptionist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReceptionist", new { id = receptionist.Id }, receptionist);
        }

        // GET: api/Receptionists/GetByOwnerId/{ownerId}
        [HttpGet("GetByOwnerId/{ownerId}")]
        public async Task<ActionResult<Receptionist>> GetReceptionistByOwnerId(Guid ownerId)
        {
            if (_context.Receptionist_1 == null)
            {
                return NotFound();
            }

            var receptionist = await _context.Receptionist_1.FirstOrDefaultAsync(c => c.OwnerId == ownerId);

            if (receptionist == null)
            {
                return NotFound();
            }

            return receptionist;
        }

        // DELETE: api/Receptionists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReceptionist(Guid id)
        {
            if (_context.Receptionist_1 == null)
            {
                return NotFound();
            }
            var receptionist = await _context.Receptionist_1.FindAsync(id);
            if (receptionist == null)
            {
                return NotFound();
            }

            _context.Receptionist_1.Remove(receptionist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReceptionistExists(Guid id)
        {
            return (_context.Receptionist_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
