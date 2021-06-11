using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Meniu.Models;

namespace Meniu
{
    public static  class Methods
    {
        public static float GetMaxPrice(List<FoodRequest> input)
        {
            float max = 0;
            foreach (var items in input)
                foreach (var item in input)
            {
                if (item.price > max)
                    max = item.price;
            }
            return max;

        }

        public static float GetTotalPrice(List<FoodRequest> input)
        {
            float total = 0;

            foreach (var item in input)
            {
                total += item.price * item.amount;
                
            } 
            return total;

        }
        public static int GetMaxWaittingTime(List<FoodRequest> input)
        {
            int max = 0;
            foreach (var items in input)
                foreach (var item in input)
                {
                    if (item.preparationTime > max)
                        max = item.preparationTime;
                }
            return max;

        }

    }
}
