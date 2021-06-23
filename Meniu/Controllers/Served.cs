using Meniu.Data;
using Meniu.Models;
using Meniu.Models.Auxiliar;
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
    public class Served : Controller
    {

        private readonly ApplicationDbContext context;

        public Served(ApplicationDbContext context)
        {
            this.context = context;
        }

       

        [HttpPost]
        public async Task<int> UpdateOrdersToServed(Orders ids)//input - list of orders id
        {

            if (ids != null)
            {
                var x = context.Order.FirstOrDefault(i => i.id == ids.id);
                x.served = true;
                context.Update(x);
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
