using SharepointCommon;
using SharepointCommon.Attributes;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Core.DomainServices
{
    public class SPPortalApplication : AppBase<SPPortalApplication>
    {
        [List(Url = Constants.GallerySlider.Name)]
        public virtual IQueryList<GallerySlider> GallerySliders { get; set; }

        [List(Url = Constants.LISTS + Constants.SEPRATE + Constants.UpcomingEvents.Name)]
        public virtual IQueryList<UpcomingEvent> UpcomingEvents { get; set; }

        [List(Url = Constants.LISTS + Constants.SEPRATE + Constants.VideoGallery.Name)]
        public virtual IQueryList<VideoGallery> VideoGallerys { get; set; }

        [List(Url = Constants.LISTS + Constants.SEPRATE + Constants.Magazine.Name)]
        public virtual IQueryList<Magazine> Magazine { get; set; }

        [List(Url = Constants.Pages.Name)]
        public virtual IQueryList<Page> WhySPPages { get; set; }
    }
}
