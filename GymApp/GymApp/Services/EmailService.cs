using MailKit.Security;
using MimeKit.Text;
using MimeKit;
using MailKit.Net.Smtp;

namespace GymApp.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _config;
        public EmailService(IConfiguration config) 
        { 
            _config = config;
        }
        public void SendEmail(EmailDto request)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailUserName").Value));
            email.To.Add(MailboxAddress.Parse(request.To));
            email.Subject = request.Subject;
            email.Body = new TextPart(TextFormat.Html) { Text = request.Body };

            using var smtp = new SmtpClient();
            smtp.Connect(_config.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls); //if gmail it will be smtp.gmail.com
            smtp.Authenticate(_config.GetSection("EmailUserName").Value, _config.GetSection("EmailPassword").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
