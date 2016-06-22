using SharepointCommon;
using SharepointCommon.Attributes;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Core.DomainServices
{
    public class SPPortalApplication : AppBase<SPPortalApplication>
    {
        [List(Url = Constants.GallerySlider.Name)]
        public virtual IQueryList<GallerySlider> GallerySliders { get; set; }
    }
}
