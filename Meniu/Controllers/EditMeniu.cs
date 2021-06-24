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
    public class EditMeniu : Controller
    {
        private readonly ApplicationDbContext context;

        public EditMeniu(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpPost]

        public async Task Updae(Food item)
        {

            var food = context.Food;
            var update = food.First(p => p.id == item.id);
            update.ingredients = item.ingredients;
            update.name = item.name;
            update.preparationTime = item.preparationTime;
            update.price = item.price;
            update.type = item.type;
            await context.SaveChangesAsync();
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
