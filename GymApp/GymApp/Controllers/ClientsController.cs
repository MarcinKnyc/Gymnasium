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
    public class ClientsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientsController(AppDbContext context)
        {
            _context = context;
        }

        // get all the active passes
        [HttpGet("GetActivePasses/{clientId}")]
        public IActionResult GetActivePasses(Guid clientId)
        {
            var activePassBoughtEvents = _context.Client_1
                .Where(c => c.Id == clientId)
                .SelectMany(c => c.PassBoughtEvents)
                .Include(pbe => pbe.Pass)
                .Where(pbe => DateTime.UtcNow < pbe.DateTime.AddDays(pbe.Pass.Duration * pbe.refresh))
                .ToList();

            return Ok(activePassBoughtEvents);
        }


        //reseting the Pass
        [HttpPut("ResetPassBoughtEventRefresh/{passBoughtEventId}")]
        public IActionResult ResetPassBoughtEventRefresh(Guid passBoughtEventId)
        {
            var passBoughtEvent = _context.PassBoughtEvent_1.FirstOrDefault(pbe => pbe.Id == passBoughtEventId);
            if (passBoughtEvent == null)
            {
                return NotFound();
            }

            passBoughtEvent.refresh = 0;
            _context.SaveChanges();

            return Ok();
        }

        // Extend the pass validity
        [HttpPut("ExtendPassValidity/{passBoughtEventId}")]
        public IActionResult ExtendPassValidity(Guid passBoughtEventId, int extension)
        {
            var passBoughtEvent = _context.PassBoughtEvent_1.FirstOrDefault(pbe => pbe.Id == passBoughtEventId);
            if (passBoughtEvent == null)
            {
                return NotFound();
            }

            passBoughtEvent.Pass.Duration += extension;
            _context.SaveChanges();

            return Ok();
        }


        // GET: api/Clients
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Client>>> GetClient_1()
        {
            if (_context.Client_1 == null)
            {
                return NotFound();
            }
            return await _context.Client_1.ToListAsync();
        }

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(Guid id)
        {
            if (_context.Client_1 == null)
            {
                return NotFound();
            }
            var client = await _context.Client_1.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }

        // PUT: api/Clients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(Guid id, Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
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

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            if (_context.Client_1 == null)
            {
                return Problem("Entity set 'AppDbContext.Client_1'  is null.");
            }
            _context.Client_1.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.Id }, client);
        }

        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(Guid id)
        {
            if (_context.Client_1 == null)
            {
                return NotFound();
            }
            var client = await _context.Client_1.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Client_1.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(Guid id)
        {
            return (_context.Client_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
