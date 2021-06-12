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
        

        public List<Food> GetFood(int id)
        {

            Console.WriteLine("Hello table " + id);
            var menu = context.Food;
            List<Food> food = new List<Food>();
           
            foreach (var item in menu)
            {
                food.Add(item);
                
            }


            return food; //trimitere lista preparate catre front-ent

        }

        [HttpPost]

        public async Task<Orders> SubmitOrder(List<FoodRequest> x)

        {

            /* cartofi , 3, 15 ,m1
             pui, 3, 15 ,m1
             porc, 3, 15 ,m1
            */
            x = x.Where(f => f.amount >= 1).ToList();

            Orders order = new Orders()
                {
                    oderDate = DateTime.Now,
                    paid = false,
                    price = Methods.GetTotalPrice(x),
                    served = false,
                    waittingTime = Methods.GetMaxWaittingTime(x),
                    comment = "",
                    table = x.First().table,


                };



              context.Order.Add(order);
            await context.SaveChangesAsync();



            foreach (var food in x)
            {
                var orderFood = new OrderFood()
                {
                    Food = food.id,
                    Order = order.id
                };
                
               

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
