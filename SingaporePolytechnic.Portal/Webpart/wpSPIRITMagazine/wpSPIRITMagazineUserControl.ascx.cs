using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using Microsoft.SharePoint;
using SingaporePolytechnic.Core.Model;
using SingaporePolytechnic.Infrastructure.DomainServices;

namespace SingaporePolytechnic.Portal.Webpart.wpSPIRITMagazine
{
    public partial class wpSPIRITMagazineUserControl : UserControl
    {
        public Magazine Item { get; set; }
        public string AttachmentLink { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Magazine firstItem = new MagazineRepository().GetItems(SPContext.Current.Web.Url).FirstOrDefault();
                if (firstItem != null)
                {
                    this.Item = firstItem;
                    if (Item.ListItem.Attachments.Count > 0)
                    {
                        AttachmentLink = Item.ListItem.Attachments.UrlPrefix + Item.ListItem.Attachments[0];
                    }
                }
            }
        }
    }
}
