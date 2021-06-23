using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(Meniu.Areas.Identity.IdentityHostingStartup))]
namespace Meniu.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}