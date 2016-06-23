using System;
using System.Text;
using System.Web.UI;
using Microsoft.SharePoint;
using SingaporePolytechnic.Infrastructure.DomainServices;

namespace SingaporePolytechnic.Portal.Webpart.wpUpcomingEvents
{
    public partial class wpUpcomingEventsUserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!Page.IsCallback)
            {
                // BuildMyString.com generated code. Please enjoy your string responsibly.
                RenderUpcomingEvents();
            }
        }

        private void RenderUpcomingEvents()
        {

            var items = new CalendarRepository().GetItems(SPContext.Current.Web.Url);
            if (items != null)
            {
                var builder = new StringBuilder();

                builder.Append("<table class=\"layoutColumn\" cellpadding=\"0\" cellspacing=\"0\">");
                builder.Append("    <tr>");
                builder.Append("	    <td>");
                builder.Append("		    <div id='wp_dt8' style='display:block;'></div>");
                builder.Append(
                    "		    <script type=\"text/javascript\">document._DNDB.pART(\"<dndTgt id='wp_dt8'></dndTgt>\");</script>");
                builder.Append("	    </td>");
                builder.Append("    </tr>");
                builder.Append("    <tr>");
                builder.Append("	    <td valign=\"top\">");
                builder.Append("		    <a name=\"Z7_N8CA14S0JGGB50AMB0SDV82SL0\"></a>");
                builder.Append("		    <div class=\"wpsPortletBody\" style=\"margin:15px 0px 0px 0px\">");
                builder.Append("			    <h4>Upcoming Events</h4>");
                builder.Append("			    <div class=\"lpg-listing matchHeight\" id=\"sphomeevents\">");
                foreach (var item in items)
                {
                    builder.Append("				    <div class='entry'>");
                    builder.Append("					    <div class='lbl'>");
                    builder.Append(
                        "						    <a href=\"#\">");
                    builder.Append(string.Format(
                        "						    <a href=\"#\" target=\"_blank\" >{0}</a></a>", item.Title));
                    builder.Append("					    </div>");
                    if(item.EventDate.HasValue)   
                        builder.Append(string.Format("					    <div class='date'>{0}</div>", item.EventDate.Value.ToString("dd MMM yy")));

                    builder.Append("					    <div style='clear:both;'></div>");
                    builder.Append("				    </div>");
                }
                builder.Append("				    <div class=\"link\">");
                builder.Append(
                    "					    <a target=\"\" title=\"\" href=\"/wps/portal/vp-spws/spws.fsu.events\" >More Events</a>");
                builder.Append("				    </div>");
                builder.Append("			    </div>");
                builder.Append("		    </div>");
                builder.Append("	    </td>");
                builder.Append("    </tr>");
                builder.Append("    <tr>");
                builder.Append("	    <td>");
                builder.Append("		    <div id='wp_dt9' style='display:block;'>&nbsp;</div>");
                builder.Append(
                    "		    <script type=\"text/javascript\">document._DNDB.pART(\"<dndTgt id='wp_dt9'></dndTgt>\");</script>");
                builder.Append("	    </td>");
                builder.Append("    </tr>");
                builder.Append("</table>");

                ltrUpcomingEvents.Text = builder.ToString();
            }
        }
    }
}
