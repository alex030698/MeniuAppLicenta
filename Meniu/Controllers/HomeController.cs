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
        
        //[Route("home/{id}")]
        public List<Food> GetFood(int id=0)
        {

            Console.WriteLine("Hello table " + id);
            var menu = context.Food;
            List<Food> food = new List<Food>();
           
            foreach (var item in menu)
            {
                item.tableId = id;
                food.Add(item);
            }


            return food; //trimitere lista preparate catre front-ent

        }

        [HttpPost]

        public async void SubmitOrder(List<FoodRequest> x)

        {
            var check = context.Order;
            /* cartofi , 3, 15 ,m1
             pui, 3, 15 ,m1
             porc, 3, 15 ,m1
            */
            x = x.Where(f => f.amount >= 1).ToList();
            // int[] table = check.Select(z => z.table).Where().ToArray();
            Orders isPaid = context.Order.LastOrDefault(y => y.table == x.First().table);
            Orders aux = new Orders();
            if (isPaid.paid == true)
            {
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
                aux = order;
                context.Order.Add(order);
            }
            else
            {
                UpdateOrder(isPaid.id, x);  
            }



              
            await context.SaveChangesAsync();



            foreach (var food in x)
            {
                var orderFood = new OrderFood()
                {
                    Food = food.id,
                    Order = aux.id
                };
                
               

                context.OrderFood.Add(orderFood);
                
            }

           // context.Order.FirstOrDefault(i => i.id == 10).paid = true;
            await context.SaveChangesAsync();


            
        }
        //set an order or list of orders as unpaid
        public async Task<Orders> UpdateOrder(int orderId, List<FoodRequest> x)//input - list of orders id
        {
            
            context.Order.FirstOrDefault(i => i.id == orderId).paid = false;
            context.Order.FirstOrDefault(i => i.id == orderId).served = false;
            
            foreach (var item in x)
            {
                OrderFood toAdd = new OrderFood()
                {
                    Food=item.id,
                    Order=orderId
                };
                context.OrderFood.Add(toAdd);
            }

            await context.SaveChangesAsync();
            return context.Order.FirstOrDefault(i=>i.id==orderId);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
