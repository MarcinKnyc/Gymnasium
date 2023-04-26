namespace GymApp.Services
{
    public interface IEmailService
    {
        void SendEmail(EmailDto request);
    }
}
