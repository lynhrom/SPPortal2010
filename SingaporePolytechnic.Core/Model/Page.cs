using System;
using SharepointCommon;

namespace SingaporePolytechnic.Core.Model
{
    public class Page : Item
    {
        public virtual string Name { get; set; }
        public virtual string Comments { get; set; }
        public virtual string Category { get; set; }
    }
}
