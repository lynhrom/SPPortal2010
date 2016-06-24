using SharepointCommon;

namespace SingaporePolytechnic.Core.Model
{
    public class Magazine : Item
    {
        public virtual string Sumary { get; set; }
        public virtual string Link { get; set; }

        //public virtual string AttachmentLink
        //{
        //    get
        //    {
        //        if (this.ListItem.Attachments.Count > 0)
        //        {
        //            return this.ListItem.Attachments.UrlPrefix + this.ListItem.Attachments[0];
        //        }

        //        return "";
        //    }
        //}
    }
}
