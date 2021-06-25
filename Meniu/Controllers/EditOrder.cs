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
    public class EditOrder : Controller
    {
        private readonly ApplicationDbContext context;

        public EditOrder(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpPost]

        public async Task Updae(Orders item)
        {
            if (item != null)
            {
                var order = context.Order;
                var update = order.First(p => p.id == item.id);
                order.Update(update);
                await context.SaveChangesAsync();
            }

        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
