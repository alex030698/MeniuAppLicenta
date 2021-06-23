using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Models
{
    public class Orderss
    {
        public int id { get; set; }
        public int orderNo { get; set; }
        public DateTime oderDate { get; set; }
        public float price { get; set; }
        public int waittingTime { get; set; }
        public bool paid { get; set; }
        public bool served { get; set; }
        public string comment { get; set; }
        public int table { get; set; }
    }
}
