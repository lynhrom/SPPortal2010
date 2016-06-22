using System;
using System.Text;
using System.Web.UI;
using Microsoft.SharePoint;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Infrastructure.DomainServices;

namespace SingaporePolytechnic.Portal.Webpart.wpMaskhead
{
    public partial class wpMaskheadUserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!Page.IsCallback)
            {
                // BuildMyString.com generated code. Please enjoy your string responsibly.
                RenderGallerySlider();
            }
        }

        private void RenderGallerySlider()
        {
            var builder = new StringBuilder();
            var items = new GallerySliderRepository().GetItems(SPContext.Current.Web.Url);
            if (items != null)
            {
                builder.Append("<div class=\"spws_maskhead home-slider\">");
                builder.Append("	<div data-dojo-type=\"custom.AutoRotator\" data-dojo-props=\"transition:'dojox.widget.rotator.crossFade', duration:5000, pauseOnManualChange:false, suspendOnHover:true\" class=\"spws_maskhead_rotator\" id=\"spws_main_rotator\" data-dojo-id=\"myAutoRotatorInstance2\">");
                foreach(var item in items)
                {
                    builder.Append("		<div class=\"spws_maskhead_rotator_pane pointer\" onclick=\"window.open('http://po.st/SurePassKit');\">");
                    builder.Append(string.Format("			<div><img src=\"{0}\" alt='{1}'/></div>", item.EncodedAbsUrl, item.Keywords));
                    builder.Append("			<div class=\"spws_caption spws_rounded\">");
                    builder.Append(string.Format("				<h2>{0}</h2>", item.Title));
                    builder.Append(string.Format("				<p>{0}</p>", item.Description));
                    builder.Append("			</div>");
                    builder.Append("		</div>");
                }
                builder.Append("	</div>");
                builder.Append("	<div class=\"spws_nav-bullets clearfix\">");
                builder.Append("		<ul class=\"right clearfix\">");
                int position = 0;
                foreach (var item in items)
                {
                    if (position == 0)
                    {
                        builder.Append(
                            "			<li><a class=\"rotatorbullet current\" title=\"banner 0\" onclick=\"dojo.publish('spws_main_rotator/rotator/control', ['go', 0]);\"></a></li>");
                    }
                    else
                    {
                        builder.Append(
                            string.Format("			<li><a class=\"rotatorbullet\" title=\"banner {0}\" onclick=\"dojo.publish('spws_main_rotator/rotator/control', ['go', {0}]);\"></a></li>", position));
                    }
                       
                    position++;
                }
                builder.Append("		</ul>");
                builder.Append("	</div>");
                builder.Append("	<div class=\"spws_nav-arrows\">");
                builder.Append("		<div class=\"spws_nav-arrow-left\">");
                builder.Append("			<a class=\"spws_nav-arrow-fill-div\" title=\"Left Slide\" onclick=\"dojo.publish('spws_main_rotator/rotator/control', ['prev']);\"></a>");
                builder.Append("		</div>");
                builder.Append("		<div class=\"spws_nav-arrow-right\">");
                builder.Append("			<a class=\"spws_nav-arrow-fill-div\" title=\"Right Slide\" onclick=\"dojo.publish('spws_main_rotator/rotator/control', ['next']);\"></a>");
                builder.Append("		</div>");
                builder.Append("	</div>");
                builder.Append("</div>");
                ltrGallerySlider.Text = builder.ToString();
            }
        }
    }
}
