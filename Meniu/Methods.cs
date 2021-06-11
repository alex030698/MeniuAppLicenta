using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Meniu.Models;

namespace Meniu
{
    public class Methods
    {
        public float GetMaxPrice(List<Food> input)
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
        public int GetMaxWaittingTime(List<Food> input)
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
