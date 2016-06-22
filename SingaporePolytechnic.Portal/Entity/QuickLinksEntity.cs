using SharepointCommon;
using SharepointCommon.Attributes;

namespace SingaporePolytechnic.Portal.Entity
{
    public class TopicQuickLinksEntity : Item
    {
        public virtual string Description { get; set; }
        public virtual string LinkTo { get; set; }
        public virtual Categories Category { get; set; }
    }

    public class QuickLinksEntity : Item
    {
        public virtual string Description { get; set; }
        public virtual string LinkTo { get; set; }
    }

    public enum Categories
    {
        [FieldAttribute("Infection Prevention & Control")]
        Infection_Prevention_Control = 0,

        [FieldAttribute("Homecare")]
        Homecare = 1,

        [FieldAttribute("Medication Safety")]
        Medication_Safety = 2,

        [FieldAttribute("Surgical Care Safety")]
        Surgical_Care_Safety = 3
    }
}
