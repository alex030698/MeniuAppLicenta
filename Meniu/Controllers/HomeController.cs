using Meniu.Data;
using Meniu.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Meniu.Methods;

namespace Meniu.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext context;

        public HomeController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        

        public List<Food> GetFood()
        {
            var menu = context.Food;
            List<Food> food = new List<Food>();
           
            foreach (var item in menu)
            {
                food.Add(item);
                
            }


            return food; //trimitere lista preparate catre front-ent

        }

        [HttpPost]

        public async Task<Orders> SubmitOrder(List<Food> x)

        {
            
          /* cartofi , 3, 15 ,m1
           pui, 3, 15 ,m1
           porc, 3, 15 ,m1
          */

          Orders order = new Orders()
            {
                oderDate = DateTime.Today,
                paid = false,
                price = Methods.GetMaxPrice(x),
                served=false,
                waittingTime = Methods.GetMaxWaittingTime(x),
                comment="",
                //table=

                
                
            };


            context.Order.Add(order);

            x = x.Where(f => f.amount >= 1).ToList();
            foreach(var food in x)
            {
                var orderFood = new OrderFood()
                {
                    Food = food,
                    Order = order
                };
                try
                {
                    orderFood.ID = context.OrderFood.Max(f => f.ID);
                }
                catch(Exception exp)
                {
                    orderFood.ID = 1;
                }

                context.OrderFood.Add(orderFood);
                

            }
            await context.SaveChangesAsync();


            return order;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
