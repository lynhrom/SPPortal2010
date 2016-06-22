using Microsoft.SharePoint;
using SharepointCommon;

namespace SingaporePolytechnic.Core.Model
{
    public class GallerySlider : Item
    {
        public virtual string Description { get; set; }
        public virtual string Keywords { get; set; }
        public virtual string EncodedAbsUrl { get; set; }
    }
}