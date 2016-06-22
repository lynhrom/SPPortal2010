<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpSPBuzzUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpSPBuzz.wpSPBuzzUserControl" %>

<table class="layoutColumn" cellpadding="0" cellspacing="0">
    <tr>
	    <td>
		    <div id='wp_dt2' style='display:block;'></div>
		    <script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt2'></dndTgt>");</script>
	    </td>
    </tr>
    <tr>
	    <td valign="top">
		    <a name="Z7_N8CA14S0JGGB50AMB0SDV82S51"></a>
		    <div class="wpsPortletBody" style="margin:15px 0px 0px 0px">
			    <h4>SP Buzz</h4>
			    <div id="spBuzz" class="lpg-box matchHeight"></div>
			    <script>
				    (function ($) {
					    var SP_BUZZ_URL = "https://spbuzz.sp.edu.sg/";
					    var SP_FEED_URL = "/Style Library/feed/spbuzzfeedxml/feed.xml";
					    var node = $("#spBuzz");

					    function find(ps, d) {
						    var p = new RegExp(ps);
						    var i = p.exec(d);
						    if (i) { return i[0]; }
						    return;
					    }

//					    debugger;
					    $.ajax({
						    url: SP_FEED_URL,
						    dataType: "html",
						    timeout: 3000,
						    success: function (d) {
							    d = d.replace(/(\n|\r)/g, "");
							    var item = find("<item>.*?(</item>)", d)
							    if (item) {
								    var obj = $("<div></div>");
								    var link = find("<link>.*?</link>", item).replace("<link>", "").replace("</link>", "");

								    var tb = $(find("<img.*?(/>)", find("<thumbnail.*?</thumbnail>", item))).attr("src");
								    if (tb) {
									    obj.append("<a href='" + link + "'><img src='" + tb + "'/></a>");
								    }
								    var title = find("<title>.*?</title>", item).replace("<title>", "").replace("</title>", "");
								    obj.append("<div class='title'><a href='" + link + "'>" + title + "</a></div>");
								    var desc = find("<description>.*?</description>", item).replace("<description>", "").replace("<![CDATA[", "").replace("]]></description>", "");
								    obj.append("<div class='desc'>" + desc + "</div>");

								    obj.append("<div class='link'><a href='" + SP_BUZZ_URL + "' target='_blank'>More SP Buzz</a></div>");
								    node.html(obj.html());
							    }
						    },
						    error: function (a, b, c) {
							    node.addClass("no-img").html("<div class='title'>Watch this space for updates</div>");
						    }
					    });
				    })(jQuery);
			    </script>
		    </div>
	    </td>
    </tr>
    <tr>
	    <td>
		    <div id='wp_dt3' style='display:block;'>&nbsp;</div>
		    <script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt3'></dndTgt>");</script>
	    </td>
    </tr>
</table>