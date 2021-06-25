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
    public class Delete : Controller
    {

        private readonly ApplicationDbContext context;

        public Delete(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpPost]

        public async Task<int> UpdateOrdersToPaid(Orders ids)
        {
            if (ids != null)
            {
                var x = context.Order.FirstOrDefault(i => i.id == ids.id);
                context.Remove(x);
                await context.SaveChangesAsync();
            }
            return 0;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
