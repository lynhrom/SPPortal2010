using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharepointCommon;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Infrastructure.DomainServices
{
    public class VideoGalleryRepository : IRepositoryBase<VideoGallery>
    {
        private SPPortalApplication app = null;

        public IEnumerable<VideoGallery> GetItems(string siteUrl)
        {
            using (app = SPPortalApplication.Factory.OpenNew(siteUrl))
            {
                var items = app.VideoGallerys.Items(CamlQuery.Default);
                return items;
            }
        }
    }
}
