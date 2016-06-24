using System;
using System.Linq;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using Microsoft.SharePoint;
using SingaporePolytechnic.Infrastructure.DomainServices;

namespace SingaporePolytechnic.Portal.Webpart.wpVideoGallery
{
    public partial class wpVideoGalleryUserControl : UserControl
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

            var currentItem = new VideoGalleryRepository().GetItems(SPContext.Current.Web.Url).FirstOrDefault();
            if (currentItem != null)
            {
                // BuildMyString.com generated code. Please enjoy your string responsibly.
                var builder = new StringBuilder(); 

                builder.Append("<table class=\"layoutColumn\" cellpadding=\"0\" cellspacing=\"0\">");
                builder.Append("	<tr>");
                builder.Append("		<td>");
                builder.Append("			<div id='wp_dt13' style='display:block;'></div>");
                builder.Append("			<script type=\"text/javascript\">															    ");
                builder.Append("				document._DNDB.pART(\"<dndTgt id='wp_dt13'></dndTgt>\");");
                builder.Append("			</script>");
                builder.Append("		</td>");
                builder.Append("	</tr>");
                builder.Append("	<tr>");
                builder.Append("		<td valign=\"top\">");
                builder.Append("			<a name=\"Z7_N8CA14S0J8FAE0AMVKG85D20F5\"></a>");
                builder.Append("			<div class=\"wpsPortletBody\" style=\"margin:15px 0px 0px 0px\">");
                builder.Append("				<h4>Video Gallery</h4>");
                builder.Append("				<div class=\"lpg-video matchHeight\">");
                builder.Append(string.Format("					<iframe allowfullscreen=\"\" frameborder=\"0\" height=\"175\" src=\"{0}\" width=\"310\"></iframe>", currentItem.VideoUrl));
                builder.Append(string.Format("					<div class=\"desc\">{0}</div>", currentItem.Title));
                builder.Append("					<div class=\"link\"><a target=\"\" title=\"\" href=\"/wps/portal/vp-spws/spws.videoshowcase\" >More Videos</a></div>");
                builder.Append("				</div>");
                builder.Append("			</div>");
                builder.Append("		</td>");
                builder.Append("	</tr>");
                builder.Append("	<tr>");
                builder.Append("		<td>");
                builder.Append("			<div id='wp_dt14' style='display:block;'>&nbsp;</div>");
                builder.Append("			<script type=\"text/javascript\">															    ");
                builder.Append("				document._DNDB.pART(\"<dndTgt id='wp_dt14'></dndTgt>\");");
                builder.Append("			</script>");
                builder.Append("		</td>");
                builder.Append("	</tr>");
                builder.Append("</table>");
                ltrVideoGallery.Text = builder.ToString();
            }
        }
    }
}
