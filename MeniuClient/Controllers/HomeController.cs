using MeniuClient.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Meniu.Methods;

namespace MeniuClient.Controllers
{
    public class HomeController : Controller
    {

        private readonly ApplicationDbContext context;

        public HomeController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]

        //[Route("home/{id}")]
        public List<Food> GetFood(int id = 0)
        {

            Console.WriteLine("Hello table ");
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
            x = x.Where(f => f.Amount >= 1).ToList();
            if (x.Count != 0)
            {
                var bla = context.Order.FirstOrDefault(y => y.table == x.FirstOrDefault().Table);
                Order isPaid = new Order();
                var auxList = check.ToList();
                isPaid = auxList.LastOrDefault(y => y.table == x.FirstOrDefault().Table);

                Order aux = new Order();
                if (isPaid.Paid == true)
                {
                    Order order = new Order()
                    {
                        OderDate = DateTime.Now,
                        Paid = false,
                        Price = Methods.GetTotalPrice(x),
                        Served = false,
                        WaittingTime = Methods.GetMaxWaittingTime(x),
                        Comment = "",
                        Table = x.First().Table,


                    };
                    aux = order;
                    context.Order.Add(order);
                }
                else
                {
                    UpdateOrder(isPaid.Id, x).Wait();




                }


                foreach (var food in x)
                {
                    var orderFood = new OrderFood()
                    {
                        Food = food.Id,
                        Order = aux.Id
                    };



                    context.OrderFood.Add(orderFood);

                }

                context.SaveChanges();

            }


        }

        public async Task<Orders> UpdateOrder(int orderId, List<FoodRequest> x)
        {

            context.Order.FirstOrDefault(i => i.id == orderId).paid = false;
            context.Order.FirstOrDefault(i => i.id == orderId).served = false;

            foreach (var item in x)
            {
                OrderFood toAdd = new OrderFood()
                {
                    Food = item.id,
                    Order = orderId
                };
                context.OrderFood.Add(toAdd);
            }

            await context.SaveChangesAsync();

            return context.Order.FirstOrDefault(i => i.id == orderId);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}

