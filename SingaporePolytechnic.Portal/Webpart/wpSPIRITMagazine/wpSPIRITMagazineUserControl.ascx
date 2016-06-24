<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Assembly Name="SharepointCommon, Version=2.2.0.0, Culture=neutral, PublicKeyToken=627269ce210281c3" %> 
<%@ Assembly Name="SingaporePolytechnic.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=b02968f98e12fb6f" %> 

<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpSPIRITMagazineUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpSPIRITMagazine.wpSPIRITMagazineUserControl" %>

<table class="layoutColumn" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div id='wp_dt5' style='display:block;'></div>
			<script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt5'></dndTgt>");</script>
		</td>
	</tr>
	<tr>
		<td valign="top">
			<a name="Z7_N8CA14S0JGGB50AMB0SDV82S53"></a>
			<div class="wpsPortletBody" style="margin:15px 0px 0px 0px">
				<div id="topRight_icons"></div>
				<h4>SPIRIT Magazine</h4>
				<div class="lpg-box matchHeight">
					<a href='<% =Item.Link %>' target='_blank'><img src='<% =AttachmentLink %>' alt='Spirit Magazine'/></a>
					<div class='title'><a href='<% =Item.Link %>' target='_blank'><% =Item.Title %></a></div>
					<div class='desc'><% =Item.Sumary %></div>
				</div>
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<div id='wp_dt6' style='display:block;'>&nbsp;</div>
			<script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt6'></dndTgt>");</script>
		</td>
	</tr>
</table>