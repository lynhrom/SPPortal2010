using SharepointCommon;
using SharepointCommon.Attributes;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.App
{
    public class SPPortalApp : AppBase<SPPortalApp>
    {
        //[List(Url = "HomeSlideImages")]
        //public virtual IQueryList<HomeSlideImagesEntity> HomeSlideImagesApp { get; set; }

        //[List(Url = "lists/QuickLinks")]
        //public virtual IQueryList<QuickLinksEntity> QuickLinksApp { get; set; }

        //[List(Url = "lists/QuickLinks")]
        //public virtual IQueryList<TopicQuickLinksEntity> TopicQuickLinksApp { get; set; }

        //[List(Url = "Pages")]
        //public virtual IQueryList<PagesEntity> PagesApp { get; set; }

        [List(Url = "lists/Navigation")]
        public virtual IQueryList<NavigationEntity> NavigationApp { get; set; }
    }
}
