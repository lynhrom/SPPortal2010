using System;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using Microsoft.SharePoint;
using SingaporePolytechnic.Portal.App;
using SingaporePolytechnic.Portal.Entity;
using System.Collections.Generic;

namespace SingaporePolytechnic.Portal.Webpart.wpTopMenu
{
    public partial class wpTopMenuUserControl : UserControl
    {
        private IList<NavigationEntity> lstNavItems = null;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
            {
                try
                {
                    NavigationApp navApp = new NavigationApp(SPContext.Current.Web.Url);
                    lstNavItems = navApp.GetItems().Where(d => d.IsUse != null && d.IsUse.Value && d.IsTopNav != null && d.IsTopNav.Value).ToList();
                    var firstLst = lstNavItems.Where(d => !d.Code.Contains(".0")).ToList();
                    rptTopNav.DataSource = firstLst;
                    lstNavItems = lstNavItems.Except(firstLst).ToList();
                    rptTopNav.DataBind();
                }
                catch
                { }
            }
        }

        protected void rptTopNav_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            var item = e.Item.DataItem as NavigationEntity;
            if (item == null) return;
            IList<NavigationEntity> lstChild = lstNavItems.Where(d => d.Code.StartsWith(item.Code + ".") && (d.Code.Length == item.Code.Length + 4)).ToList();
            if (lstChild.Count > 0)
            {
                lstNavItems = lstNavItems.Except(lstChild).ToList();

                var rpt = e.Item.FindControl("rptTopNavChild1") as Repeater;
                //var rpt = new Repeater();
                rpt.HeaderTemplate = rptTopNavChild.HeaderTemplate;
                rpt.ItemTemplate = rptTopNavChild.ItemTemplate;
                rpt.FooterTemplate = rptTopNavChild.FooterTemplate;
                rpt.ItemDataBound += rptTopNav_ItemDataBound;
                rpt.DataSource = lstChild;

                //e.Item.Controls.Add(rpt);
                rpt.DataBind();
            }
        }
    }
}
