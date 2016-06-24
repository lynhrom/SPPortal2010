using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using Microsoft.SharePoint;
using SingaporePolytechnic.Core.Model;
using SingaporePolytechnic.Infrastructure.DomainServices;

namespace SingaporePolytechnic.Portal.Webpart.wpHomeSlides
{
    public partial class wpHomeSlidesUserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsCallback)
            {
                // BuildMyString.com generated code. Please enjoy your string responsibly.
                RenderVideoGallery();
            }
        }

        private void RenderVideoGallery()
        {
            string siteUrl = SPContext.Current.Web.Url + Path.DirectorySeparatorChar + Constants.SubSites.FutureStudents;
            var items = new WhySPRepository().GetItems(siteUrl).Take(3);
            if (items.Any())
            {
                var builder = new StringBuilder();

                builder.Append("<div class='spws_rotating_boxes'>");
                builder.Append("	<div class='spws_container'>");
                builder.Append("		<h4>Why SP</h4>");
                builder.Append("		<div class='flexslider'>");
                builder.Append("			<ul class='slides'>");
                foreach(var item in items)
                {
                    builder.Append("				<li>");
                    builder.Append("					<div class=\"lpg-box\">");
                    builder.Append("						<a href='#'><img src='/_layouts/SP.edu.sg/images/awesome.jpg?MOD=AJPERES' alt='SP is Awesome!'/></a>");
                    builder.Append(string.Format("						<div class='title'><a href='#'>{0}</a></div>", item.Title));
                    builder.Append(string.Format("						<div class='desc'>{0}</div>", item.Comments));
                    builder.Append("					</div>");
                    builder.Append("				</li>");
                }
                
                builder.Append("			</ul>");
                builder.Append("		</div>");
                builder.Append("		<div class='controls' style='display:none;'>");
                builder.Append("			<div class='flex-prev nav'>&nbsp;</div>");
                builder.Append("			<div class='flex-next nav'>&nbsp;</div>");
                builder.Append("			<div style='clear:both;'></div>");
                builder.Append("		</div>");
                builder.Append("	</div>");
                builder.Append("</div>");
                ltrWhySP.Text = builder.ToString();
            }
        }
    }
}
