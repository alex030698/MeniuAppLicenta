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

        public async Task<List<ParseOrder>> GetOrdersAsync()
        {
            var orders = context.Order.Where(x=>x.paid==false);
            var food = context.Food;
            var orderfood = context.OrderFood;

            var test = context.Orderr;


            List<Orders> ordersList = new List<Orders>();
            if (orders.Count() != 0)
                ordersList =  orders.ToList();

            if (ordersList!=null)
            {
                List<OrderFood> orderFoodList = new List<OrderFood>();
                List<Food> foodList = new List<Food>();
                foreach (var item in ordersList)
                {
                    List<OrderFood> aux = new List<OrderFood>();
                    aux = orderfood.Where(x => x.Order == item.id).ToList();
                    var l = orderFoodList.Concat(aux);
                    orderFoodList = l.ToList();

                }
                foreach (var item in orderFoodList)
                {
                    List<Food> aux = new List<Food>();
                    aux = food.Where(x => x.id == item.Food).ToList();
                    var l = foodList.Concat(aux);
                    foodList = l.ToList();
                }


                List<ParseOrder> output = new List<ParseOrder>();
                foreach (var item in ordersList)
                {
                    Food temp = new Food();
                    List<Food> tempList = new List<Food>();
                    foreach (var item2 in orderFoodList)
                    {

                        if (item2.Order == item.id)
                        {
                            temp = context.Food.FirstOrDefault(z => z.id == item2.Food);
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
                await context.SaveChangesAsync();
return output;
            }

            return null;
            
        }


        [HttpPost]
        public async Task<int> UpdateOrdersToServed(Orders ids)//input - list of orders id
        {

            if (ids != null)
            {
                var x = context.Order.FirstOrDefault(i => i.id == ids.id);
                x.served = true;
                context.Update(x);
                await context.SaveChangesAsync();
            }
            return 0;
        }

        //set an order or list of orders as paid
        public async Task<int> UpdateOrdersToPaid(Orders ids ,string custom)//input - list of orders id
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
       
        //set an order or list of orders as unpaid
        public async void UpdateOrdersToUnpaid(List<int> ids)//input - list of orders id
        {
            foreach (var item in ids)
            {
                context.Order.FirstOrDefault(i => i.id == item).paid = false;
            }
            await context.SaveChangesAsync();
        }
        
        //set an order or list of orders as served
        public async Task<int> UpdateOrdersToServed(Orders ids, string custom)//input - list of orders id
        {
            
            
              context.Update(  context.Order.FirstOrDefault(i => i.id == ids.id).served=true);
           
            await context.SaveChangesAsync();

            return 0;
        }

        //set an order or list of orders as unserved 
        public async void UpdateOrdersToUnserved(List<int> ids) //input - list of orders id
        {
            foreach (var item in ids)
            {
                context.Order.FirstOrDefault(i => i.id == item).served = false;
            }
            await context.SaveChangesAsync();
        }

        public async void AddNewItemsInMenu(List<Food> foods)
        {
            foreach(var item in foods)
            {
                context.Food.Add(item);
            }
            await context.SaveChangesAsync();
        }


        public async void RemoveItemsFromMenu(List<int> ids)
        {
            foreach (var item in ids)
            {
                var line = context.Food.FirstOrDefault(x => x.id == item);
                context.Remove(line);
            }
            await context.SaveChangesAsync();
        }

        public async void UpdateItemsInMenu(List<Food> foods)
        {
            foreach(var item in foods)
            {

            }
            await context.SaveChangesAsync();
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
