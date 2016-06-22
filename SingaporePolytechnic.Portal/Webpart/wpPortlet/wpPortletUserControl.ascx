<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpPortletUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpPortlet.wpPortletUserControl" %>

<table class="layoutColumn" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div id='wp_dt24' style='display:block;'></div>
			<script type="text/javascript">															    document._DNDB.pART("<dndTgt id='wp_dt24'></dndTgt>");</script>
		</td>
	</tr>
	<tr>
		<td valign="top">
			<a name="Z7_UH5E2F54000V10I490MH6A0A95"></a>
			<div class="wpsPortletBody" style="margin:15px 0px 0px 0px">
				<div id="topLeft_title">
					<h1></h1>
				</div>
				<div id="topRight_icons"></div>
				<div class="clearing"></div>
				<div class="spws_banner_rotator" data-dojo-id="banner01" data-dojo-props="transition:'dojox.widget.rotator.crossFade', duration:3000, pauseOnManualChange:false, suspendOnHover:true" data-dojo-type="dojox.widget.AutoRotator" dir="ltr">
					<div class="spws_banner_rotator_pane"><a href="http://goserve.sg/" target="_blank" ><img alt="Go Serve" src="/_layouts/SP.edu.sg/images/banner_goserve.jpg" title="Go Serve" /></a></div>
					<div class="spws_banner_rotator_pane"><a href="http://spgogreen.sg/" target="_blank" ><img alt="Go Green Site" src="/_layouts/SP.edu.sg/images/banner_gogreen.jpg" title="Go Green" /></a></div>
					<div class="spws_banner_rotator_pane"><a href="http://www.skillsfuture.sg/programmes-and-initiatives.html" target="_blank" ><img alt="SkillsFuture" src="/_layouts/SP.edu.sg/images/banner_skillsfuture.jpg" title="SkillsFuture" /></a></div>
				</div>
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<div id='wp_dt25' style='display:block;'>&nbsp;</div>
			<script type="text/javascript">															    document._DNDB.pART("<dndTgt id='wp_dt25'></dndTgt>");</script>
		</td>
	</tr>
</table>