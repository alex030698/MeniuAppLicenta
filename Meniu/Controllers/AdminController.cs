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
    public class AdminController : Controller
    {

        private readonly ApplicationDbContext context;

        public AdminController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public List<ParseOrder> GetOrders()
        {
            var orders = context.Order;
            var food = context.Food;
            var orderfood = context.OrderFood;

            List<Orders> ordersList = orders.Where(x=>x.paid==false).ToList();
            List<OrderFood> orderFoodList= new List<OrderFood>();
            List<Food> foodList=new List<Food>();
            foreach (var item in ordersList)
            {
                List<OrderFood> aux = new List<OrderFood>(); 
                aux= orderfood.Where(x => x.Order == item.id).ToList();
                var l=orderFoodList.Concat(aux);
                orderFoodList = l.ToList();
                
            }
            foreach(var item in orderFoodList)
            {
                List<Food> aux = new List<Food>();
                aux= food.Where(x => x.id == item.Food).ToList();
                var l=foodList.Concat(aux);
                foodList = l.ToList();
            }


            List<ParseOrder> output = new List<ParseOrder>();
            foreach(var item in ordersList)
            {
                Food temp = new Food();
                List<Food> tempList = new List<Food>();
                foreach (var item2 in orderFoodList)
                {

                    if (item2.Order == item.id)
                    {
                        temp=context.Food.FirstOrDefault(z => z.id == item2.Food);
                        tempList.Add(context.Food.FirstOrDefault(z => z.id == item2.Food));
                    }

                }

                ParseOrder aux = new ParseOrder()
                {
                    id = item.id,
                    orderNo = item.orderNo,
                    oderDate = item.oderDate,
                    price = item.price,
                    waittingTime = item.waittingTime,
                    paid = item.paid,
                    served = item.served,
                    comment = item.comment,
                    table = item.table,
                    food = tempList
            };

                output.Insert(output.Count, aux);
            }


            return output;
            
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
