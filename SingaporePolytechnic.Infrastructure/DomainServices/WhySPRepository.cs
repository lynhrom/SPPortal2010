using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharepointCommon;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Infrastructure.DomainServices
{
    public class WhySPRepository : IRepositoryBase<Page>
    {
        public IEnumerable<Page> GetItems(string siteUrl)
        {
            using (var app = SPPortalApplication.Factory.OpenNew(siteUrl))
            {
                var items = app.WhySPPages.Items(CamlQuery.Default);
                return items;
            }
        }
    }
}
