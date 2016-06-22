using System;
using System.Linq;
using System.Reflection;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.SharePoint;
using SingaporePolytechnic.Portal.App;
using System.Collections.Generic;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.Webpart.wpSiteMap
{
    public partial class wpSiteMapUserControl : UserControl
    {
        private IList<NavigationEntity> lstNavItems = null;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
            {
                try
                {
                    NavigationApp navApp = new NavigationApp(SPContext.Current.Web.Url);
                    lstNavItems = navApp.GetItems().Where(d => d.IsUse != null && d.IsUse.Value).ToList();
                    var firstLst = lstNavItems.Where(d => !d.Code.Contains(".0")).ToList();
                    rptSitemap.DataSource = firstLst;
                    lstNavItems = lstNavItems.Except(firstLst).ToList();
                    rptSitemap.DataBind();
                }
                catch
                { }
            }
        }

        protected void rptSitemap_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            var item = e.Item.DataItem as NavigationEntity;
            if (item == null) return;
            IList<NavigationEntity> lstChild = lstNavItems.Where(d => d.Code.StartsWith(item.Code + ".") && (d.Code.Length == item.Code.Length + 4)).ToList();
            if (lstChild.Count > 0)
            {
                lstNavItems = lstNavItems.Except(lstChild).ToList();

                var rpt = e.Item.FindControl("rptSitemapChild1") as Repeater;
                //var rpt = new Repeater();
                rpt.HeaderTemplate = rptSitemapChild.HeaderTemplate;
                rpt.ItemTemplate = rptSitemapChild.ItemTemplate;
                rpt.FooterTemplate = rptSitemapChild.FooterTemplate;
                rpt.ItemDataBound += rptSitemap_ItemDataBound;
                rpt.DataSource = lstChild;

                //e.Item.Controls.Add(rpt);
                rpt.DataBind();
            }
        }
    }
}
