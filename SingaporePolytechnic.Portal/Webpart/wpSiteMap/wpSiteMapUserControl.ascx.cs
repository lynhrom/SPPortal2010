using System;
using System.Linq;
using System.Web.UI;
using Microsoft.SharePoint;
using SingaporePolytechnic.Portal.App;
using System.Collections.Generic;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.Webpart.wpSiteMap
{
    public partial class wpSiteMapUserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
            {
                try
                {
                    NavigationApp navApp = new NavigationApp(SPContext.Current.Web.Url);
                    IList<NavigationEntity> lstNavItems = navApp.GetItems().Where(d => d.IsUse != null && d.IsUse.Value).ToList();
                    rptSitemap.DataSource = lstNavItems;
                    rptSitemap.DataBind();
                    int countItemTrue = lstNavItems.Count;
                    Console.WriteLine();
                    //rptQuickLinks.DataSource = lstQuickLinks;
                    //rptQuickLinks.DataBind();
                }
                catch
                { }
            }
        }
    }
}
