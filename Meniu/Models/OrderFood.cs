using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meniu.Models
{
    public class OrderFood
    {
        public int ID { get; set; }

        public Food Food { get; set; }
        public Orders Order { get; set; }

    }
}
