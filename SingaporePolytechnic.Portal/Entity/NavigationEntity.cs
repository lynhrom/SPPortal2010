using System;
using SharepointCommon;
//using SharepointCommon.Attributes;

namespace SingaporePolytechnic.Portal.Entity
{
    public class NavigationEntity : Item
    {
        //[Field(DisplayName = "Navigation Link")]
        public virtual string NavLink { get; set; }

        //[Field(DisplayName = "Navigation Code")]
        public virtual string Code { get; set; }

        //[Field(DisplayName = "Is Top Navigation")]
        public virtual bool? IsTopNav { get; set; }

        //[Field(DisplayName = "Is Main Navigation")]
        public virtual bool? IsMainNav { get; set; }

        //[Field(DisplayName = "Is Use")]
        public virtual bool? IsUse { get; set; }
    }
}
