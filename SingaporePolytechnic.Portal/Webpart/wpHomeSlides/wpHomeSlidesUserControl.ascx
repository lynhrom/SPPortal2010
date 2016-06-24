<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpHomeSlidesUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpHomeSlides.wpHomeSlidesUserControl" %>
<asp:Literal ID="ltrWhySP" runat="server"></asp:Literal>

<script>
    $(window).ready(function () {
        $(".spws_rotating_boxes .flexslider").flexslider({
            animation: "slide",
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            itemWidth: 338,
            customDirectionNav: $(".spws_rotating_boxes .controls .nav"),
            start: function () {
                var maxHeight = 0;
                $(".spws_rotating_boxes .lpg-box").each(function () {
                    var h = $(this).outerHeight();
                    if (h > maxHeight) { maxHeight = h; }
                }).height(maxHeight);
            }
        });
    });
</script>