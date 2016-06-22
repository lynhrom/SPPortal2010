<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpTopMenuUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpTopMenu.wpTopMenuUserControl" %>

<!--[if lte IE 7]>
<style>
	ul.stakeholder_nav ul li{ width: 100%; float:left;} 
</style>
<![endif]-->

<asp:Repeater runat="server" ID="rptTopNav" OnItemDataBound="rptTopNav_ItemDataBound">
    <HeaderTemplate>
        <ul class="stakeholder_nav right clearfix">
    </HeaderTemplate>
    <ItemTemplate>
        <li>
            <a href='<%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "javascript:void(0);" : DataBinder.Eval(Container.DataItem, "NavLink")) %>'
            target='<%# (Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink")).StartsWith("http") ? "_blank" : "_self") %>'>
            <span class='arrow'></span>
            <%# DataBinder.Eval(Container.DataItem, "Title") %></a>
            <asp:Repeater runat="server" ID="rptTopNavChild1"></asp:Repeater>
        </li>
    </ItemTemplate>
    <FooterTemplate>
        </ul>
    </FooterTemplate>
</asp:Repeater>

<asp:Repeater runat="server" ID="rptTopNavChild">
    <HeaderTemplate>
        <ul>
    </HeaderTemplate>
    <ItemTemplate>
        <li>
            <a href='<%# (string.IsNullOrEmpty(Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink"))) ? "javascript:void(0);" : DataBinder.Eval(Container.DataItem, "NavLink")) %>'
                target='<%# (Convert.ToString(DataBinder.Eval(Container.DataItem, "NavLink")).StartsWith("http") ? "_blank" : "_self") %>'>
            <%# DataBinder.Eval(Container.DataItem, "Title") %></a>
            <asp:Repeater runat="server" ID="rptTopNavChild1"></asp:Repeater>
        </li>
    </ItemTemplate>
    <FooterTemplate>
        </ul>
    </FooterTemplate>
</asp:Repeater>

<%--<ul class="stakeholder_nav right clearfix">
	<li>
		<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExMjfULsh0VAYPfRD0!/?WCM_GLOBAL_CONTEXT='><span class='arrow'></span>Parents</a>
		<ul>
			<li>
				<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAxMjfULsh0VAZTTt3E!/?WCM_GLOBAL_CONTEXT='>Courses</a>
				<ul>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMnD3dDBxNfIx9PfyDDAxCjPQLsh0VAV9wvRA!/?WCM_GLOBAL_CONTEXT='>Full-time Diploma Courses</a>
						<ul>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMnD3dDBxNfIx9PfyDDIB8_YJsR0UAxzaUag!!/?WCM_GLOBAL_CONTEXT='>Course Intakes and JAE ELR2B2</a></li>
						</ul>
					</li>
				</ul>
			</li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB19jfQLsh0VAcSVL4s!/?WCM_GLOBAL_CONTEXT='>Student Success Stories</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsjLxcDRxNzP3dTL2cjA1CDfQLsh0VATS-w9M!/?WCM_GLOBAL_CONTEXT='>What Other Parents Say</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB19zfULsh0VAXcE4ts!/?WCM_GLOBAL_CONTEXT='>Teaching and Learning</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UIMDDzDgtzMPZ2djI0CjfQLsh0VASbcfjc!/?WCM_GLOBAL_CONTEXT='>Photo Gallery</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcDT1cDRzN3J3dDUMsjUyczfULsh0VARE3JVg!/' target='_blank'>Career Interest Profiling</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8HS0MDRxNXBxN_b2MDA38DfULsh0VAcYj8V8!/?WCM_GLOBAL_CONTEXT='>Frequently Asked Questions</a></li>
		</ul>
	</li>
	<li>
		<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExMTfQLsh0VATvvQSA!/?WCM_GLOBAL_CONTEXT='><span class='arrow'></span>Teachers</a>
		<ul>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMLDzNDTy9zFwC3N1NjSz8TPQLsh0VASSlisk!/?WCM_GLOBAL_CONTEXT='>Career Guidance, Talks & Exhibitions</a></li>
			<li>
				<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DH29TPULsh0VAeyII8s!/?WCM_GLOBAL_CONTEXT='>Activities for Teachers</a>
				<ul>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMQs0dDTydDQI9ncz9jQ0szPQLsh0VAWWmXJ4!/?WCM_GLOBAL_CONTEXT='>Enrichment Programmes for Teachers</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB0tzPULsh0VAfv7smU!/?WCM_GLOBAL_CONTEXT='>Teacher Work Attachment (TWA)</a></li>
				</ul>
			</li>
			<li>
				<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF3djfULsh0VAYQRSK8!/?WCM_GLOBAL_CONTEXT='>Activities for Students</a>
				<ul>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMQs0dDTydDQI9ncz9jQ3MDPULsh0VAYDtZtM!/?WCM_GLOBAL_CONTEXT='>Events for Students</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB29DfQLsh0VAfUBN6U!/?WCM_GLOBAL_CONTEXT='>Young Engineers' Club</a></li>
				</ul>
			</li>
			<li>
				<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF0tTPULsh0VAVtSMWM!/?WCM_GLOBAL_CONTEXT='>Courses</a>
				<ul>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAw8jPQLsh0VAdqxVDc!/?WCM_GLOBAL_CONTEXT='>Full-time Diploma Courses</a>
						<ul>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAw8DPULsh0VAXTDwLE!/?WCM_GLOBAL_CONTEXT='>Course Intakes and JAE ELR2B2</a></li>
						</ul>
					</li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF39DfULsh0VAej-b9E!/?WCM_GLOBAL_CONTEXT='>Advanced Elective Modules (AEMs)</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsnC0MDDyDfHxDLQJ9PA2MjPULsh0VAXyhciw!/' target='_blank'>School-Based Courses</a></li>
				</ul>
			</li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcDT1cDRzN3J3dDUMsjUycTfULsh0VARqW7RU!/' target='_blank'>Career Interest Profiling</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAyMjPQLsh0VAb8-TH8!/?WCM_GLOBAL_CONTEXT='>Frequently Asked Questions</a></li>
		</ul>
	</li>
	<li>
		<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjEwMzPQLsh0VAZdhsT8!/?WCM_GLOBAL_CONTEXT='><span class='arrow'></span>Alumni</a>
		<ul>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH0tDTwtXTzCzM1DDb3djfQLsh0VAZEJ8IM!/?WCM_GLOBAL_CONTEXT='>About the Department of Student Development and Alumni Relations (DSA)</a></li>
			<li>
				<a href='javascript:void(0);'>Communications</a>
				<ul>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws3CzdDBw9TUNDQv09jA08jPQLsh0VASDpWDE!/?WCM_GLOBAL_CONTEXT='>
							<span class="__cf_email__" data-cfemail="0a4b667f6764634a595a">[email&#160;protected]</span><script data-cfhash='f9e31' type="text/javascript">/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</script> e-newsletter
						</a>
					</li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI3CzPULsh0VATBa5Jw!/?WCM_GLOBAL_CONTEXT='>SP Alumni Magazine</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMQkKNDByDTc1C3UPDDEzcDfULsh0VAVkkFy0!/?WCM_GLOBAL_CONTEXT='>SP Publications</a></li>
				</ul>
			</li>
			<li>
				<a href='javascript:void(0);'>Staying Connected</a>
				<ul>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU1czfULsh0VAc5dAKg!/?WCM_GLOBAL_CONTEXT='>Alumni community service programmes</a>
						<ul>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU1CDfULsh0VAR0ihxk!/?WCM_GLOBAL_CONTEXT='>Local Community Service Project</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU0MTfQLsh0VAVjbszY!/?WCM_GLOBAL_CONTEXT='>Overseas Community Service Project</a></li>
						</ul>
					</li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU1cTfULsh0VAcX8yOU!/?WCM_GLOBAL_CONTEXT='>Alumni event or programme</a></li>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DdwsDRxDgy2cvU0NDJzNzPQLsh0VAV_eZxo!/?WCM_GLOBAL_CONTEXT='>Alumni Interest Groups (AIGS)</a>
						<ul>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsPE2NDBwDDTxM_ExDjC0CTfQLsh0VAVR9uu0!/?WCM_GLOBAL_CONTEXT='>Join an existing AIG</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsPE2NDBwDDTxM_ExDjC0CjfULsh0VAexNv_A!/?WCM_GLOBAL_CONTEXT='>Form an AIG</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws_LxcDBwDvc38AwJDDN1djPQLsh0VARYDbss!/?WCM_GLOBAL_CONTEXT='>FAQs</a></li>
						</ul>
					</li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI38zPQLsh0VATxbiQM!/?WCM_GLOBAL_CONTEXT='>SP Alumni School Representatives</a></li>
				</ul>
			</li>
			<li>
				<a href='javascript:void(0);'>Benefits & Privileges</a>
				<ul>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMDDxdDBw9_BxD_d1CDP19TfQLsh0VAaVXwkY!/' target='_blank'>ACE Startups Grant</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDD3dzfQLsh0VASmTK2c!/?WCM_GLOBAL_CONTEXT='>SP Alumni Card</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzc3bydDRxdDT2c3SzCDCx8DfULsh0VAWtDPKM!/' target='_blank'>SP Graduates' Guild</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMgi0cDRy9fQ1N_FwsDAx8DPULsh0VAZYixlc!/?WCM_GLOBAL_CONTEXT='>Career Portal</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzc3bydDRxdDT2c3SzCDPz9zfQLsh0VAXP6M48!/?WCM_GLOBAL_CONTEXT='>Further Studies</a></li>
				</ul>
			</li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMfHwNDDxD3M0cQ8NcjF1MzfULsh0VAaOaUP4!/' target='_blank'>Giving Back to SP</a></li>
			<li>
				<a href='javascript:void(0);'>Interactive Services</a>
				<ul>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI3MTfQLsh0VAc9vsTc!/?WCM_GLOBAL_CONTEXT='>Alumni Directory</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI3MjfULsh0VAXdftCo!/?WCM_GLOBAL_CONTEXT='>Update Your Particulars</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDD39jfQLsh0VAVifVc8!/?WCM_GLOBAL_CONTEXT='>Application Procedures and Forms for Graduates</a></li>
					<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8jS0tDDyDDFx93MydDQ2MDfULsh0VAV1nMYE!/' target='_blank'>Graduate Employment Survey </a></li>
				</ul>
			</li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8vQwNDBwNvE2NzN19DQz8DfULsh0VAdkFPc4!/?WCM_GLOBAL_CONTEXT='>Data Protection Statement</a></li>
		</ul>
	</li>
	<li class='no-child '><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMDC0sDBwNLcx9g03MjQwCzfQLsh0VAb0nbwU!/' target='_blank'><span class='arrow'></span>Industry</a></li>
	<li class='no-child '><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMLP0MDDyDjCyDQyz8DC2CzPULsh0VAYc_rwU!/?WCM_GLOBAL_CONTEXT='><span class='arrow'></span>SP Students</a></li>
	<li class='no-child '><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMLP0MDDyDjCyDQyz8DP09jPULsh0VAZgmBfs!/?WCM_GLOBAL_CONTEXT='><span class='arrow'></span>Staff</a></li>
	<li>
		<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExCzPULsh0VAcTaFIs!/?WCM_GLOBAL_CONTEXT='><span class='arrow'></span>Media</a>
		<ul>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcQ0MNDDy9QsyNXQOcDfwtjfQLsh0VAR1ImN0!/?WCM_GLOBAL_CONTEXT='>News Releases</a></li>
			<li>
				<a href='javascript:void(0);'>News</a>
				<ul>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF1NzPQLsh0VAYFKBSI!/?WCM_GLOBAL_CONTEXT='>News Clippings</a>
						<ul>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwM_H0NDRxNXV0NXAONDC0MTfULsh0VAR5oGd8!/?WCM_GLOBAL_CONTEXT='>Be InSPired</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcw4xdDBwt3Z1c3MMCjd1NTPULsh0VATVnHtY!/?WCM_GLOBAL_CONTEXT='>2016 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcwxxNDBwdXQ0DPV28Dd0tjfQLsh0VAewzCu0!/?WCM_GLOBAL_CONTEXT='>2015 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMQs0sDBz9Pf0MPSwtjQzczfULsh0VAdOD9i4!/?WCM_GLOBAL_CONTEXT='>2014 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UKMDTyD3Lz8g83NDYPNzPQLsh0VAQ4Ahhs!/?WCM_GLOBAL_CONTEXT='>2013 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcTcyMDDxNzQ2dvQ2CjZxCjPQLsh0VAbsAUlQ!/?WCM_GLOBAL_CONTEXT='>2012 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMTDzMDTx9g4L83YxcjU1cTfQLsh0VAd8tEAM!/?WCM_GLOBAL_CONTEXT='>2011 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcfUwNDTydvf3N_APdjNzdzPULsh0VAZcSVKc!/?WCM_GLOBAL_CONTEXT='>2010 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNz9TPQLsh0VAZ9_Q54!/?WCM_GLOBAL_CONTEXT='>2009 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNz9jPULsh0VASdPRoM!/?WCM_GLOBAL_CONTEXT='>2008 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNzdzPQLsh0VAfOQZOA!/?WCM_GLOBAL_CONTEXT='>2007 Archive</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNzDDPQLsh0VASDv41E!/?WCM_GLOBAL_CONTEXT='>2006 Archive</a></li>
						</ul>
					</li>
					<li>
						<a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DDx9zPQLsh0VAXgZeUA!/?WCM_GLOBAL_CONTEXT='>SPBuzz Archive</a>
						<ul>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DDzdjPULsh0VAYXXxLQ!/?WCM_GLOBAL_CONTEXT='>2008</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DDzDzPQLsh0VAfja14M!/?WCM_GLOBAL_CONTEXT='>2007</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DBwNDPQLsh0VAY9bDW4!/?WCM_GLOBAL_CONTEXT='>2006</a></li>
							<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DBwNTPULsh0VATzKwD4!/?WCM_GLOBAL_CONTEXT='>2005</a></li>
						</ul>
					</li>
				</ul>
			</li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjCwMjPQLsh0VAci0PYE!/?WCM_GLOBAL_CONTEXT='>Calendar of Events</a></li>
			<li><a href='/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjCzcDfULsh0VAcMoZi4!/?WCM_GLOBAL_CONTEXT='>Help for Media</a></li>
		</ul>
	</li>
</ul>--%>
<script>
	$(".stakeholder_nav").gjMenuExt({
		delay: 1000
	});
</script>