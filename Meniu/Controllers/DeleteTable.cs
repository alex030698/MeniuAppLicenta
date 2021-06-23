using Meniu.Data;
using Meniu.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DeleteTable : Controller
    {
        private readonly ApplicationDbContext context;

        public DeleteTable(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public async Task Delete(Tables x)
        {
            
            var table = context.Table;
            if (table.Count() > 1)
            {
                var last = table.OrderByDescending(g => g.id).Take(1);

                table.RemoveRange(last);
               await context.SaveChangesAsync();
            }
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
