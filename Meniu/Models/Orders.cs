using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Models
{
    public class Orders
    {
        public int id { get; set; }
        public int orderNo { get; set; }
        public DateTime oderDate { get; set; }
        public float price { get; set; }
        public int waittingTime { get; set; }
        public Boolean paid { get; set; }
        public Boolean served { get; set; }
        public string comment { get; set; }
        public int table { get; set; }
    }
}
