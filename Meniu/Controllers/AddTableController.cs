using Meniu.Data;
using Meniu.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Controllers
{       [Authorize]
        [ApiController]
        [Route("[controller]")]
    public class AddTable : Controller
    {
        
        
            private readonly ApplicationDbContext context;

            public AddTable(ApplicationDbContext context)
            {
                this.context = context;
            }

            [HttpPost]
            public async Task<int> Add(Tables x)
            {
                var table = context.Table;
                Tables item = new Tables()
                {
                    
                    busy = false,
                    number = table.Count()+1
                };
                table.Add(item);
               await context.SaveChangesAsync();
            return 0;
            }
            public IActionResult Index()
            {
                return View();
            }
        }
    
}
