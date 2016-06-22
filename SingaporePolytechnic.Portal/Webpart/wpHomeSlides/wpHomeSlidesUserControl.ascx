<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpHomeSlidesUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpHomeSlides.wpHomeSlidesUserControl" %>

<div class='spws_rotating_boxes'>
	<div class='spws_container'>
		<h4>Why SP</h4>
		<div class='flexslider'>
			<ul class='slides'>
				<li>
					<div class="lpg-box">
						<a href='/wps/portal/vp-spws/spws.fsu.whysp?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/why sp/sp is awesome'><img src='/_layouts/SP.edu.sg/images/awesome.jpg?MOD=AJPERES' alt='SP is Awesome!'/></a>
						<div class='title'><a href='/wps/portal/vp-spws/spws.fsu.whysp?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/why sp/sp is awesome'>SP is Awesome!</a></div>
						<div class='desc'>The rumours are true - SP is a pretty awesome place to be in. Not convinced that SP rules? We give you twelve irresistible reasons why!</div>
					</div>
				</li>
				<li>
					<div class="lpg-box">
						<a href='/wps/portal/vp-spws/spws.fsu.whysp?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/why sp/be inspired'><img src='/_layouts/SP.edu.sg/images/beinspired.jpg?MOD=AJPERES' alt='Be InSPired'/></a>
						<div class='title'><a href='/wps/portal/vp-spws/spws.fsu.whysp?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/why sp/be inspired'>Be InSPired</a></div>
						<div class='desc'>Read the inspirational stories of individuals who overcame the odds through sheer determination and a passion for learning.</div>
					</div>
				</li>
				<li>
					<div class="lpg-box">
						<a href='/wps/portal/vp-spws/spws.fsu.whysp?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/why sp/successful graduates'><img src='/_layouts/SP.edu.sg/images/successfulgraduates2.jpg?MOD=AJPERES' alt='Successful Graduates'/></a>
						<div class='title'><a href='/wps/portal/vp-spws/spws.fsu.whysp?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/why sp/successful graduates'>Successful Graduates</a></div>
						<div class='desc'>Check out the long list of SP graduates excelling and clinching scholarships from organisations and universities!</div>
					</div>
				</li>
			</ul>
		</div>
		<div class='controls' style='display:none;'>
			<div class='flex-prev nav'>&nbsp;</div>
			<div class='flex-next nav'>&nbsp;</div>
			<div style='clear:both;'></div>
		</div>
	</div>
</div>
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