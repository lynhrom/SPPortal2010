using SharepointCommon;
using SharepointCommon.Attributes;

namespace SingaporePolytechnic.Portal.Entity
{
    public class HomeSlideImagesEntity : Item
    {
        public virtual string Description { get; set; }
        public virtual string SubTitle { get; set; }
        public virtual Positions Position { get; set; }
        public virtual string LinkTo { get; set; }
    }

    public enum Positions
    {
        [FieldAttribute("Left")]
        Left = 0,

        [FieldAttribute("Top Middle Left")]
        Top_Middle_Left = 1,

        [FieldAttribute("Top Right")]
        Top_Right = 2,

        [FieldAttribute("Bottom Right")]
        Bottom_Right = 3
    }
}
