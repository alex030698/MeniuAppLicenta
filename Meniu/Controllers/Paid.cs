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
    public class Paid : Controller
    {
        private readonly ApplicationDbContext context;

        public Paid(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpPost]

        //set an order or list of orders as paid
        public async Task<int> UpdateOrdersToPaid(Orders ids, string custom)//input - list of orders id
        {

            if (ids != null)
            {
                var x = context.Order.FirstOrDefault(i => i.id == ids.id);

                x.paid = true;
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
