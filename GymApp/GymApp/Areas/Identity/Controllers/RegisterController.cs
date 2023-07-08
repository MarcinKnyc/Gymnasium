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
using Microsoft.AspNetCore.WebUtilities;
using System.Text.Encodings.Web;
using System.Text;

namespace GymApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly SignInManager<GymUser> _signInManager;
        private readonly UserManager<GymUser> _userManager;
        private readonly IUserStore<GymUser> _userStore;
        private readonly IUserEmailStore<GymUser> _emailStore;
        private readonly ILogger<RegisterController> _logger;
        private readonly IEmailSender _emailSender;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly AppDbContext _context;

        public RegisterController(
            UserManager<GymUser> userManager,
            IUserStore<GymUser> userStore,
            SignInManager<GymUser> signInManager,
            ILogger<RegisterController> logger,
            IEmailSender emailSender,
            RoleManager<IdentityRole> roleManager,
            AppDbContext context
            )
        {
            _userManager = userManager;
            _userStore = userStore;
            _emailStore = GetEmailStore();
            _signInManager = signInManager;
            _logger = logger;
            _emailSender = emailSender;
            _roleManager = roleManager;
            _context = context;
        }

        private IUserEmailStore<GymUser> GetEmailStore()
        {
            if (!_userManager.SupportsUserEmail)
            {
                throw new NotSupportedException("The default UI requires a user store with email support.");
            }
            return (IUserEmailStore<GymUser>)_userStore;
        }

        private GymUser CreateUser()
        {
            try
            {
                return Activator.CreateInstance<GymUser>();
            }
            catch
            {
                throw new InvalidOperationException($"Can't create an instance of '{nameof(GymUser)}'. " +
                    $"Ensure that '{nameof(GymUser)}' is not an abstract class and has a parameterless constructor, or alternatively " +
                    $"override the register page in /Areas/Identity/Pages/Account/Register.cshtml");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Index(GymUserDAO userDAO)
        {
            var user = CreateUser();

            await _userStore.SetUserNameAsync(user, userDAO.email, CancellationToken.None);
            await _emailStore.SetEmailAsync(user, userDAO.email, CancellationToken.None);
            var result = await _userManager.CreateAsync(user, userDAO.plainTextPassword);

            if (! result.Succeeded)
            {
                List<string> errors = new();
                foreach (var error in result.Errors)
                {
                    errors.Add(error.Description);
                }

                return BadRequest(string.Join(", ", errors));
            }

            _logger.LogInformation("User created a new account with password.");
            var userId = await _userManager.GetUserIdAsync(user);

            // Create Client with this user's ID as owner's ID.
            Client client = new Client{
                Name = "Fill your details",
                OwnerId = new Guid(userId ?? ""),
                PhoneNumber = "Fill your details",
                Surname = "Fill your details",
            };
            _context.Client_1.Add(client);
            await _context.SaveChangesAsync();
           
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));

            //todo: add email sending and confirmation
            //await _emailSender.SendEmailAsync(userDAO.email, "Confirm your email",
            //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

            //if (_userManager.Options.SignIn.RequireConfirmedAccount)
            //{
            //    return RedirectToPage("RegisterConfirmation", new { email = userDAO.email });
            //}
            //else
            //{
            await _signInManager.SignInAsync(user, isPersistent: false);
            return Created($"Users/{userId}", code);
            //}            
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> ConfirmEmail(string email, string email_code)
        {            
            var user = await _userManager.FindByEmailAsync(email);
            if(user == null || await _userManager.IsEmailConfirmedAsync(user)) 
                return BadRequest("Didn't succeed confirming email. Did you use correct email and code?");

            var code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(email_code));
            var result = await _userManager.ConfirmEmailAsync(user, code);

            if (!result.Succeeded) 
                return BadRequest("Didn't succeed confirming email. Did you use correct email and code?");

            //await _emailSender.SendEmailAsync(
            //    Input.Email,
            //    "Reset Password",
            //    $"Please reset your password by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");
            await _signInManager.RefreshSignInAsync(user);
            return Ok(email);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddRole(string userEmail, string roleName)
        {
            var user = await _userManager.FindByEmailAsync(userEmail);

            if (user == null)
            {
                return NotFound($"User with email '{userEmail}' not found.");
            }

            if (!await _roleManager.RoleExistsAsync(roleName))
            {
                return NotFound($"Role '{roleName}' not found.");
            }

            var result = await _userManager.AddToRoleAsync(user, roleName);

            if (result.Succeeded)
            {
                return Ok($"Role '{roleName}' added to user '{userEmail}'.");
            }

            return BadRequest("Failed to add role to user.");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddRoleToSystem(string roleName)
        {
            if (roleName == null)
            {
                return BadRequest("Failed to add role to the system.");
            }
            if (await _roleManager.RoleExistsAsync(roleName))
            {
                return BadRequest($"Role '{roleName}' already exists.");
            }
            var result = await _roleManager.CreateAsync(new IdentityRole(roleName.Trim()));

            if (! result.Succeeded)
            {
                return BadRequest("failed to add the role to the system.");
            }
            return Ok($"Role '{roleName}' added to the system.");

        }

    }
}
