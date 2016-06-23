using Microsoft.SharePoint;
using SharepointCommon;
using System;

namespace SingaporePolytechnic.Core.Model
{
    public class UpcomingEvent : Item
    {
        public virtual string Location { get; set; }
        public virtual DateTime? EventDate { get; set; }
        public virtual string Description { get; set; }
    }
}