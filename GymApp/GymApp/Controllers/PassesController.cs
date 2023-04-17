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
    public class PassesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PassesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Passes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pass>>> GetPass_1()
        {
          if (_context.Pass_1 == null)
          {
              return NotFound();
          }
            return await _context.Pass_1.ToListAsync();
        }

        // GET: api/Passes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pass>> GetPass(Guid id)
        {
          if (_context.Pass_1 == null)
          {
              return NotFound();
          }
            var pass = await _context.Pass_1.FindAsync(id);

            if (pass == null)
            {
                return NotFound();
            }

            return pass;
        }

        // PUT: api/Passes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPass(Guid id, Pass pass)
        {
            if (id != pass.Id)
            {
                return BadRequest();
            }

            _context.Entry(pass).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassExists(id))
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

        // POST: api/Passes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pass>> PostPass(Pass pass)
        {
          if (_context.Pass_1 == null)
          {
              return Problem("Entity set 'AppDbContext.Pass_1'  is null.");
          }
            _context.Pass_1.Add(pass);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPass", new { id = pass.Id }, pass);
        }

        // DELETE: api/Passes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePass(Guid id)
        {
            if (_context.Pass_1 == null)
            {
                return NotFound();
            }
            var pass = await _context.Pass_1.FindAsync(id);
            if (pass == null)
            {
                return NotFound();
            }

            _context.Pass_1.Remove(pass);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassExists(Guid id)
        {
            return (_context.Pass_1?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
