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

        // GET: api/Clients/GetByOwnerId/{ownerId}
        [HttpGet("GetByOwnerId/{ownerId}")]
        public async Task<ActionResult<Client>> GetClientByOwnerId(Guid ownerId)
        {
            if (_context.Client_1 == null)
            {
                return NotFound();
            }

            var client = await _context.Client_1.FirstOrDefaultAsync(c => c.OwnerId == ownerId);

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
