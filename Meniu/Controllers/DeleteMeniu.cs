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
    public class DeleteMeniu : Controller
    {
        private readonly ApplicationDbContext context;

        public DeleteMeniu(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task Delete(Food item)
        {
            var food = context.Food;
            food.Remove(item);
            await context.SaveChangesAsync();

        }
        

        public IActionResult Index()
        {
            return View();
        }
    }
}
