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

        [HttpPost]
        public async Task<IActionResult> Index(GymUserDAO userDAO)
        {

            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, set lockoutOnFailure: true
            var result = await _signInManager.PasswordSignInAsync(userDAO.email, userDAO.plainTextPassword, false, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                if (result.IsNotAllowed)
                    return Unauthorized("You must confirm your email first. Use link we sent you.");

                return Unauthorized("Invalid login attempt.");
            }

            _logger.LogInformation("User logged in.");

            var user = await _userManager.FindByEmailAsync(userDAO.email);
            JwtSecurityToken token = await generateJwtToken(user);

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });




            //todo: implement lockout
            //if (result.RequiresTwoFactor)
            //{
            //    //return RedirectToPage("./LoginWith2fa", new { ReturnUrl = returnUrl, RememberMe = Input.RememberMe });
            //}
            //if (result.IsLockedOut)
            //{
            //    _logger.LogWarning("User account locked out.");
            //    //return RedirectToPage("./Lockout");
            //}
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
