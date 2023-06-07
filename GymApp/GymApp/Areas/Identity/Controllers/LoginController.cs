using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GymApp.Data;
using GymApp.Models;
using GymApp.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.AspNetCore.Authentication;

namespace GymApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly SignInManager<GymUser> _signInManager;
        private readonly ILogger<LoginController> _logger;
        private readonly UserManager<GymUser> _userManager;
        private readonly IConfiguration _configuration;

       public LoginController(
            SignInManager<GymUser> signInManager, 
            ILogger<LoginController> logger,
            UserManager<GymUser> userManager,
            IConfiguration configuration
            )
        {
            _signInManager = signInManager;
            _logger = logger;
            _userManager = userManager;
            _configuration = configuration;
        }

        [Authorize]
        [HttpPut("ChangeEmail")]
        public async Task<IActionResult> ChangeEmail(string newEmail)
        {
            // Znajdź aktualnie zalogowanego użytkownika
            string userId = User.FindFirst(ClaimTypes.Name)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var token = await _userManager.GenerateChangeEmailTokenAsync(user, newEmail);
            var result = await _userManager.ChangeEmailAsync(user, newEmail, token);

            if (result.Succeeded)
            {
                var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                result = await _userManager.ConfirmEmailAsync(user, emailConfirmationToken);
                await _userManager.SetUserNameAsync(user, newEmail);
                await _userManager.UpdateNormalizedUserNameAsync(user);
                return Ok("Email changed successfully");
            }

            return BadRequest("Error changing email");
        }

        [Authorize]
        [HttpPut("ChangePassword")]
        public async Task<IActionResult> ChangePassword(string oldPassword, string newPassword)
        {
            // Pobierz Id aktualnie zalogowanego użytkownika
            string userId = User.FindFirst(ClaimTypes.Name)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }

            // Znajdź użytkownika na podstawie Id
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var result = await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);

            if (result.Succeeded)
            {
                return Ok("Password changed successfully");
            }

            return BadRequest("Error changing password");
        }



        [HttpPost]
        public async Task<IActionResult> Index(GymUserDAO userDAO)
        {

            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, set lockoutOnFailure: true
            var result = await _signInManager.PasswordSignInAsync(userDAO.email, userDAO.plainTextPassword, false, lockoutOnFailure: false);
            if (!result.Succeeded)
            {
                return Unauthorized("Invalid login attempt??.");
            }

            _logger.LogInformation("User logged in.");

            var user = await _userManager.FindByEmailAsync(userDAO.email);
            JwtSecurityToken token = await generateJwtToken(user);

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }

        private async Task<JwtSecurityToken> generateJwtToken(GymUser user)
        {
            var userRoles = await _userManager.GetRolesAsync(user);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Id),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            return new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
            );
        }
    }
}
