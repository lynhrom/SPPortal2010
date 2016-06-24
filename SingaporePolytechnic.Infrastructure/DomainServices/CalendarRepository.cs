using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharepointCommon;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Core.Model;

namespace SingaporePolytechnic.Infrastructure.DomainServices
{
    public class CalendarRepository : IRepositoryBase<UpcomingEvent>
    {

        public IEnumerable<UpcomingEvent> GetItems(string siteUrl)
        {
            using (var app = SPPortalApplication.Factory.OpenNew(siteUrl))
            {
                var items = app.UpcomingEvents.Items(CamlQuery.Default);
                return items;
            }
        }
    }
}
