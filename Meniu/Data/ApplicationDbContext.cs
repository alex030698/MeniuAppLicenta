using IdentityServer4.EntityFramework.Options;
using Meniu.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {}
        public DbSet<Meniu.Models.Food> Food { get; set; }
        public DbSet<Orders> Order { get; set; }
        public DbSet<Restaurants> Restaurant { get; set; }
        public DbSet<OrderFood> OrderFood { get; set; }
        public DbSet<Tables> Table { get; set; }
    }
}
