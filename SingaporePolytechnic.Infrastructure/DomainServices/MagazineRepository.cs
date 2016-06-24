using System.Collections.Generic;
using SharepointCommon;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Infrastructure.DomainServices
{
    public class MagazineRepository : IRepositoryBase<Magazine>
    {
        private SPPortalApplication app = null;

        public IEnumerable<Magazine> GetItems(string siteUrl)
        {
            using (app = SPPortalApplication.Factory.OpenNew(siteUrl))
            {
                var items = app.Magazine.Items(CamlQuery.Default);
                return items;
            }
        }
    }
}
