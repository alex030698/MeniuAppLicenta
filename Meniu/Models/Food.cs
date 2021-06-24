using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Models
{
    public class Food
    {
        
        public int id { get; set; }
        public string name { get; set; }

        public string type { get; set; }
        public int  amount { get; set; }
        public float price { get; set; }

        public string ingredients { get; set; }

        public int preparationTime { get; set; }

        public int tableId { get; set; }
    }
}
