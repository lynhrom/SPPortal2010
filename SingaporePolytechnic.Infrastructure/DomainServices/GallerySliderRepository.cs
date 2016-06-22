using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharepointCommon;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Infrastructure.DomainServices
{
    public class GallerySliderRepository : IRepositoryBase<GallerySlider>
    {
        private SPPortalApplication app = null;

        public IEnumerable<GallerySlider> GetItems(string siteUrl)
        {
            using (app = SPPortalApplication.Factory.OpenNew(siteUrl))
            {
                var items = app.GallerySliders.Items(CamlQuery.Default).ToList();
                return items;
            }
        }
    }
}
