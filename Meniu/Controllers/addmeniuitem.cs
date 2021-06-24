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
    public class addmeniuitem : Controller
    {
        private readonly ApplicationDbContext context;

        public addmeniuitem(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpPost]

        public async Task<int> AddItem(Food item)
        {
            var food = context.Food;
            await food.AddAsync(item);

            await context.SaveChangesAsync();

            return 0;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
