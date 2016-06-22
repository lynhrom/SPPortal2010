<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpSocialMediaUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpSocialMedia.wpSocialMediaUserControl" %>

<table class="layoutColumn" cellpadding="0" cellspacing="0">
<tr>
	<td>
		<div id='wp_dt16' style='display:block;'></div>
		<script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt16'></dndTgt>");</script>
	</td>
</tr>
<tr>
	<td valign="top">
		<a name="Z7_N8CA14S0J8FAE0AMVKG85D20F7"></a>
		<div class="wpsPortletBody" style="margin:15px 0px 0px 0px">
			<h4>Social Media</h4>
			<div id="socialMediaBox" style='width:647px;'></div>
			<script>
				$(function () {
					$("#socialMediaBox").gjSocialFeed({
						twitter: {
							limit: 20
						},
						ordering: ["facebook", "twitter"],
						//ordering:["instagram","facebook","twitter"],
						charLimit: 100,
						timeout: 15000,
						errMsg: '<p>Yikes! Looks like the connection is a little wonky. Check back here again in a bit to see live updates from our Instagram/Facebook/Twitter! Or you might want to access them directly.</p><p>Instagram: <a href="http://instagram.com/singaporepoly" target="_blank" >http://instagram.com/singaporepoly</a><br>Facebook: <a href="http://www.facebook.com/singaporepolytechnic" target="_blank" >http://www.facebook.com/singaporepolytechnic</a><br>Twitter: <a href="http://twitter.com/SingaporePoly" target="_blank" >http://twitter.com/SingaporePoly</a><br>'
					});
				});
			</script>
		</div>
	</td>
</tr>
<tr>
	<td>
		<div id='wp_dt17' style='display:block;'>&nbsp;</div>
		<script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt17'></dndTgt>");</script>
	</td>
</tr>
</table>