<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpSiteMapUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpSiteMap.wpSiteMapUserControl" %>

<div class="wpsPortletBody">
	<script language="javascript" src='/_layouts/sp.edu.sg/js/spsitemap.js'></script>
	<div class="spSitemap">
        <asp:Repeater runat="server" ID="rptSitemap" OnItemDataBound="rptSitemap_ItemDataBound">
            <HeaderTemplate>
                <ul id="spsitemap_ul_root">
            </HeaderTemplate>
            <ItemTemplate>
                <li>
                    <a href="<%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "javascript:void(0);" : DataBinder.Eval(Container.DataItem, "NavLink")) %>" class="<%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "label" : "link1stLevel") %>" code="<%# DataBinder.Eval(Container.DataItem, "Code") %>"><%# DataBinder.Eval(Container.DataItem, "Title") %></a>
                    <asp:Repeater runat="server" ID="rptSitemapChild1"></asp:Repeater>
                </li>
            </ItemTemplate>
            <FooterTemplate>
                </ul>
            </FooterTemplate>
        </asp:Repeater>

        <asp:Repeater runat="server" ID="rptSitemapChild">
            <HeaderTemplate>
                <ul>
            </HeaderTemplate>
            <ItemTemplate>
                <li>
                    <a <%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "" : "target='_blank'") %> href="<%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "javascript:void(0);" : DataBinder.Eval(Container.DataItem, "NavLink")) %>" class="<%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "label" : "") %>" code="<%# DataBinder.Eval(Container.DataItem, "Code") %>"><%# DataBinder.Eval(Container.DataItem, "Title") %></a>
                    <asp:Repeater runat="server" ID="rptSitemapChild1"></asp:Repeater>
                </li>
            </ItemTemplate>
            <FooterTemplate>
                </ul>
            </FooterTemplate>
        </asp:Repeater>
	</div>
	<script type="text/javascript">	    compactMenu('spsitemap_ul_root', 3);</script>
</div>
