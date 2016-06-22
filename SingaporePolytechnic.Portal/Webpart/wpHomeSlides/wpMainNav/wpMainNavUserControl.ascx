<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpMainNavUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpMainNav.wpMainNavUserControl" %>

<div class="spws_main-nav spws_nav clearfix" id="spws_nav">
    <asp:Repeater runat="server" ID="rptMainNav" OnItemDataBound="rptMainNav_ItemDataBound">
        <HeaderTemplate>
            <ul class="clearfix">
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
            <ul class="clearfix">
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

    <ul class="clearfix">
	    <li>
		    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExcTPULsh0VAQHnAqE!/?WCM_GLOBAL_CONTEXT=" class="spws_menu_marker ">About SP</a>
		    <div class="spws_megamenu spws_megamenu_1 clearfix">
			    <ul class="clearfix">
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsAn0tDBw9Qr38vI2CjA38jfQLsh0VAfjoWwk!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">SP at a Glance</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF29DfQLsh0VAV4JfO4!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Statistics in Brief</a></li>
							    <li>
								    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF2DzfQLsh0VAeo4FGw!/?WCM_GLOBAL_CONTEXT=">The SP Story</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNydzfULsh0VAfFsAHk!/?WCM_GLOBAL_CONTEXT=">SP Timeline</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNyDDfULsh0VASITh8g!/?WCM_GLOBAL_CONTEXT=">SP Traditions</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF09jfULsh0VAdlqd_8!/?WCM_GLOBAL_CONTEXT=">Corporate Information</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNw9TfULsh0VAbSSuJA!/?WCM_GLOBAL_CONTEXT=">Board of Governors</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNwdzfULsh0VAdh9n-4!/?WCM_GLOBAL_CONTEXT=">Mission and Vision</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNwDjfULsh0VAQCj0BI!/?WCM_GLOBAL_CONTEXT=">Quality & Environmental Policy</a></li>
										    <li>
											    <a href="javascript:void(0);" class="cursor ">Social Responsibilities</a>
											    <span class="spws_megamenu_toggle">(<span>+</span>)</span>
											    <div class="spws_megamenu spws_megamenu_4 clearfix">
												    <ul class="clearfix">
													    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNx9DfQLsh0VARQnOjQ!/?WCM_GLOBAL_CONTEXT=">SP Care</a></li>
													    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws_LxcDBxdXSwsHP3MDC3MDfQLsh0VAZwwdTs!/" target="_blank">SP Go Green</a></li>
													    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzc3QxdDBxdzdwN_ENMjNzNTfQLsh0VAc_HWOo!/" target="_blank">SP Go Serve</a></li>
												    </ul>
											    </div>
										    </li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNx9TfULsh0VAae292Q!/?WCM_GLOBAL_CONTEXT=">Institution of Public Character (IPC)</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNxdjfQLsh0VAXjIHUo!/?WCM_GLOBAL_CONTEXT=">Teaching and Learning</a></li>
									    </ul>
								    </div>
							    </li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczf1dDDyNLR0dPU18jdwDzfQLsh0VAb3WPS0!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Facilities</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsAt1dDTxNTF1DfR2dAn0sTPQLsh0VATKLqAY!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Video Gallery</a></li>
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcfZ2dDDydjMx8nMw9jR29jPQLsh0VAZWanyM!/?WCM_GLOBAL_CONTEXT=" class="no-child ">SP Mobile Apps</a></li>
						    </ul>
					    </div>
				    </li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF3NjPULsh0VARvKV-U!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Contacts and Directions</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc_YKdDTz9LQN9XJyCjEP9jfQLsh0VAX3DxEQ!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Contact Us</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcw5xNDBw9zByNjN3NjQwCDfULsh0VAVxA964!/" class="no-child " target="_blank">Campus Map</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNxNjfQLsh0VAVMYdaY!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Directions to SP</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNyNzfULsh0VAdq8aJU!/?WCM_GLOBAL_CONTEXT=" class="no-child ">What's Nearby</a></li>
						    </ul>
					    </div>
				    </li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLx9jPQLsh0VAeIamPo!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Publications</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL2NjPQLsh0VAT3mSec!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Prospectus</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL2NzPULsh0VAY53hLc!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Academic School Brochures</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTC3NDTxd3IN9nIK8DEycDPQLsh0VAQr8FcA!/?WCM_GLOBAL_CONTEXT=" class="no-child ">SPirit</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsnJ2cDRxdvTwCAoK9jSzcTPQLsh0VAQ7Cxg4!/?WCM_GLOBAL_CONTEXT=" class="no-child ">The Right Choice</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsnJ2cDRxdvTwCAoK9jfzdjfULsh0VAYthIRM!/?WCM_GLOBAL_CONTEXT=" class="no-child ">SP News</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcvSzdDDwdXfyCw5wDPczMTPULsh0VAZH32us!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Annual Report</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMfAKdDRxdgw2d_ENdDAxcTPQLsh0VASKbMxs!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Parents Guide</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMfAKdDRxdgw2d_ENdDAxcjPULsh0VAZqrNgY!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Teachers Guide</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL1DDfQLsh0VAV01kOQ!/?WCM_GLOBAL_CONTEXT=" class="no-child ">InSPire</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcwzxdDRyNQn0tw9y9jQyMTfULsh0VAfmoWDg!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Alumni Service to SP</a></li>
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL0dzfQLsh0VAZ1uWKE!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Innovation & Enterprise</a></li>
						    </ul>
					    </div>
				    </li>
			    </ul>
		    </div>
	    </li>
	    <li>
		    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws3ExMDBx93Qx93fxcDbzNzfQLsh0VAbMgcOg!/?WCM_GLOBAL_CONTEXT=" class="spws_menu_marker ">Courses</a>
		    <div class="spws_megamenu spws_megamenu_1 clearfix">
			    <ul class="clearfix">
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLwtDPULsh0VAXScK2Q!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Full-time Courses</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Applied Sciences</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydDfQLsh0VAWb2orM!/?WCM_GLOBAL_CONTEXT=">Applied Chemistry</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydjfQLsh0VAW1Xav4!/?WCM_GLOBAL_CONTEXT=">Biomedical Science</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydDfULsh0VAcMl_ng!/?WCM_GLOBAL_CONTEXT=">Biotechnology</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydjfULsh0VAciENjU!/?WCM_GLOBAL_CONTEXT=">Chemical Engineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyDDfQLsh0VAahqfNQ!/?WCM_GLOBAL_CONTEXT=">Food Science & Technology</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyDDfULsh0VAQ25IB8!/?WCM_GLOBAL_CONTEXT=">Nutrition, Health & Wellness</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyNDPQLsh0VAfktvfk!/?WCM_GLOBAL_CONTEXT=">Perfumery & Cosmetic Science</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Built Environment</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyNTfULsh0VAYOwIk0!/?WCM_GLOBAL_CONTEXT=">Architecture</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyNzfULsh0VAYgR6gA!/?WCM_GLOBAL_CONTEXT=">Civil Engineering with Business</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyDTPULsh0VAdL342A!/?WCM_GLOBAL_CONTEXT=">Hotel & Leisure Facilities Management</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdzNDfULsh0VAYbW_CI!/?WCM_GLOBAL_CONTEXT=">Integrated Events & Project Management</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdzNjfULsh0VAY13NG8!/?WCM_GLOBAL_CONTEXT=">Landscape Architecture</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Business and Management</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVwNDPQLsh0VAdA8Im4!/?WCM_GLOBAL_CONTEXT=">Accountancy</a></li>
										    <li>
											    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVwNjPQLsh0VAdud6iM!/?WCM_GLOBAL_CONTEXT=">Banking & Finance</a>
											    <span class="spws_megamenu_toggle">(<span>+</span>)</span>
											    <div class="spws_megamenu spws_megamenu_4 clearfix">
												    <ul class="clearfix">
													    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UKMDTyDDP0sjfycDFwMjPQLsh0VAWqg2jo!/" target="_blank">Banking</a></li>
													    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UKMDTyDDP0sjfycDFwMDPQLsh0VAWEBEnc!/" target="_blank">Financial Trading</a></li>
												    </ul>
											    </div>
										    </li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVwNDPULsh0VAXXvfqU!/?WCM_GLOBAL_CONTEXT=">Business Administration</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyDzfQLsh0VAciOAEA!/?WCM_GLOBAL_CONTEXT=">Business Innovation & Design</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVzdjfQLsh0VAX5zJQo!/?WCM_GLOBAL_CONTEXT=">Financial Informatics</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVxNDPULsh0VAWbLMVE!/?WCM_GLOBAL_CONTEXT=">Human Resource Management with Psychology</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVzdjfULsh0VAdugecE!/?WCM_GLOBAL_CONTEXT=">Tourism & Resort Management</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQ0sDBwdPV1DTALMDT2dDPULsh0VASUbPIo!/?WCM_GLOBAL_CONTEXT=">Engineering</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUxMjPQLsh0VAeV6T9M!/?WCM_GLOBAL_CONTEXT=">Aeronautical Engineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwMDPULsh0VAVgslKE!/?WCM_GLOBAL_CONTEXT=">Aerospace Electronics</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUxMDPULsh0VAUsI21U!/?WCM_GLOBAL_CONTEXT=">Bioengineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUxMDPQLsh0VAe7bh54!/?WCM_GLOBAL_CONTEXT=">Common Engineering Programme</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUzcjfQLsh0VAVOwzw4!/?WCM_GLOBAL_CONTEXT=">Computer Engineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUzcDfULsh0VAf3CW4g!/?WCM_GLOBAL_CONTEXT=">Electrical & Electronic Engineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwMjPULsh0VAVONXOw!/?WCM_GLOBAL_CONTEXT=">Energy Systems & Management </a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUzcjfULsh0VAfZjk8U!/?WCM_GLOBAL_CONTEXT=">Engineering with Business</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8g80MDTyNfU3Mg939DNzdjfQLsh0VAdmO2Lc!/?WCM_GLOBAL_CONTEXT=">Engineering Systems</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUy8DfQLsh0VASx7p4Q!/?WCM_GLOBAL_CONTEXT=">Mechanical Engineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUy8jfQLsh0VASfab8k!/?WCM_GLOBAL_CONTEXT=">Mechatronics & Robotics</a></li>
									    </ul>
								    </div>
							    </li>
						    </ul>
						    <ul class="clearfix">
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Health Sciences</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyDjfULsh0VAQYY6FI!/?WCM_GLOBAL_CONTEXT=">Optometry</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Humanities</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwszJ1NDTwN3cIsXI0MjE1CDPULsh0VAWrhYBk!/?WCM_GLOBAL_CONTEXT=">Applied Drama & Psychology</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwszJ1NDTwN3cIsXI0MjE1CjPULsh0VAWFAqFQ!/?WCM_GLOBAL_CONTEXT=">Creative Writing for TV & New Media</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Information and Digital Technologies</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfwNTfQLsh0VAZk7FKY!/?WCM_GLOBAL_CONTEXT=">Business Information Technology</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfwNzfULsh0VATdJgCA!/?WCM_GLOBAL_CONTEXT=">Infocomm Security Management</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfyNjfULsh0VAQgajiw!/?WCM_GLOBAL_CONTEXT=">Information Technology</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfw9TPQLsh0VAWGu5N8!/?WCM_GLOBAL_CONTEXT=">Music & Audio Technology</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="javascript:void(0);" class="cursor ">Maritime Studies</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwcDfULsh0VAcf3i-s!/?WCM_GLOBAL_CONTEXT=">Marine Engineering</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwcjfULsh0VAcxWQ6Y!/?WCM_GLOBAL_CONTEXT=">Maritime Business</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwCDfQLsh0VAay4CUc!/?WCM_GLOBAL_CONTEXT=">Nautical Studies</a></li>
									    </ul>
								    </div>
							    </li>
						    </ul>
						    <ul class="clearfix">
							    <li class="last-child ">
								    <a href="javascript:void(0);" class="cursor ">Media & Design</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfwNzfQLsh0VAZKa3Os!/?WCM_GLOBAL_CONTEXT=">Digital Animation </a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdgTxD_YJsR0UAE05smw!!/?WCM_GLOBAL_CONTEXT=">Experience & Product Design</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdgTxj_YJsR0UAGO-k1g!!/?WCM_GLOBAL_CONTEXT=">Games Design & Development</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDdxDDPQLsh0VAXgB7jc!/?WCM_GLOBAL_CONTEXT=">Interior Design</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwszJ1NDTwN3cIsXI0MjE2MDfQLsh0VAaRALZw!/?WCM_GLOBAL_CONTEXT=">Media & Communication</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDdxDjPQLsh0VAXOgJno!/?WCM_GLOBAL_CONTEXT=">Visual Communication & Media Design</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfx9TPULsh0VAddZ9-A!/?WCM_GLOBAL_CONTEXT=">Visual Effects & Motion Graphics</a></li>
									    </ul>
								    </div>
							    </li>
						    </ul>
					    </div>
				    </li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DANMTPQLsh0VAcXUlls!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Academic Schools</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH2NDfQLsh0VAZTFrjw!/" class="no-child " target="_blank">Architecture & the Built Environment</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGxT_YJsR0UAuI98Jg!!/" class="no-child " target="_blank">Business</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGwT_YJsR0UAHVwg7Q!!/" class="no-child " target="_blank">Communication, Arts & Social Sciences</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMXPzNDTz9g_w83TzMnSwDzfQLsh0VATUiLu0!/" class="no-child " target="_blank">Chemical & Life Sciences</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH29zPULsh0VAdRgW1g!/" class="no-child " target="_blank">Design</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGwz_YJsR0UAFv3ooA!!/" class="no-child " target="_blank">Digital Media & Infocomm Technology</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGxz_YJsR0UAsy60aw!!/" class="no-child " target="_blank">Electrical & Electronic Engineering</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH3NjfULsh0VASmTdU4!/" class="no-child " target="_blank">Mechanical & Aeronautical Engineering</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH1NzfULsh0VARbAe0I!/" class="no-child " target="_blank">Mathematics & Science</a></li>
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTF0tDPULsh0VAX5ZECY!/" class="no-child " target="_blank">Singapore Maritime Academy</a></li>
						    </ul>
					    </div>
				    </li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcPYNcDDyd_B0tQr08DN2dDPQLsh0VAb0c7BI!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Diploma-Plus</a></li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsnC0MDDyDfHxDLQJ9jMK8TfQLsh0VAQjw9Sw!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Foreign languages</a></li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws3ExMDBx93Qx93fxcDbxdDPQLsh0VARgJqeM!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Advanced Elective Modules (AEMs) </a></li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLx9zPULsh0VAVGLVao!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Further Education</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li>
								    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL0NDfULsh0VAQ6ONVA!/?WCM_GLOBAL_CONTEXT=">Advanced Standing</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMzI3MDTxNLF3cg33NjAyMTPQLsh0VAQlYnOQ!/?WCM_GLOBAL_CONTEXT=">Universities With Advanced Standing</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMzI3MDTxNLF3cg33NjMy8TPQLsh0VAcLPdP0!/?WCM_GLOBAL_CONTEXT=">Resources For Overseas Studies</a></li>
									    </ul>
								    </div>
							    </li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsDDzMDRwNjfw9gj1NDf0tjPULsh0VARbE4D8!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Local Universities</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsDDzMDRwNjfw9gj1NDf39zfQLsh0VAQC74kY!/" class="no-child " target="_blank">Scholarships for University Studies</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsDDzMDRwNjfw9gj1NDf39TfULsh0VAa7JdsA!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Resources for Overseas Studies </a></li>
						    </ul>
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDJ1DzfQLsh0VAfXNLOE!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Part-time Courses</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDJ1DTfULsh0VAVu_uGc!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Short Courses/WSQ Courses</a></li>
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL0DDPULsh0VAV_J9H0!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Degree Programmes @ SP</a></li>
						    </ul>
					    </div>
				    </li>
			    </ul>
		    </div>
	    </li>
	    <li>
		    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLx9TfQLsh0VAUvytoo!/?WCM_GLOBAL_CONTEXT=" class="spws_menu_marker ">Admissions</a>
		    <div class="spws_megamenu spws_megamenu_1 clearfix">
			    <ul class="clearfix">
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJzdDfULsh0VAQMn7q0!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Admissions Exercises</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJwtTPQLsh0VAXIWA-c!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Joint Admissions Exercise (JAE)</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJy9TfULsh0VAWEP3_E!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Joint Polytechnic Admissions Exercise (JPAE)</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJzNzPQLsh0VASTM9Po!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Direct Admissions Exercise (DAE)</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcfb2MDDx9vF2dgoE8C08D_YJsR0UAg2x9pQ!!/" class="no-child " target="_blank">Polytechnic Foundation Programme Admissions Exercise (PFPAE)</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwM3LxdDBxNPT2DfUyNDP09zfQLsh0VAbZ2Tfk!/" class="no-child " target="_blank">Early Admissions Exercise (EAE)</a></li>
						    </ul>
					    </div>
				    </li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDE3cDfQLsh0VAYY7oWE!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Course Intakes and JAE ELR2B2</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8g0MtDDzNTR0NLAx9LcwdzfULsh0VAbtTmGc!/" class="no-child " target="_blank">Course Eligibility Calculator</a></li>
						    </ul>
					    </div>
				    </li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLxdDfQLsh0VATr-yCI!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Financial Matters</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDE2MzPQLsh0VARcnqAk!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Course Fees and Fees Payable</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8nR1dDTx9fUNMnf39jJw9DfQLsh0VAQlC6VE!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Scholarships (Based on academic merit and CCA records)</a></li>
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2NjfULsh0VAfjoOCI!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Financial Assistance Schemes</a></li>
						    </ul>
					    </div>
				    </li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJwDzPQLsh0VAfu1khI!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Enrolment</a></li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsAt1dDTxNTF1DfR2dzDzCDPQLsh0VAQsc-Po!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">International Qualifications</a></li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsLEMMDTzNLfxcAo2dDAOCjfULsh0VATLkSiE!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Academic Calendar</a></li>
			    </ul>
		    </div>
	    </li>
	    <li>
		    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8gwwsDDyDDDyNXX1NDL09DPULsh0VAfMW3FI!/" class="spws_menu_marker " target="_blank">
			    <span class="__cf_email__" data-cfemail="0e4267686b4e5d5e">[email&#160;protected]</span><script data-cfhash='f9e31' type="text/javascript">/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</script>
		    </a>
	    </li>
	    <li>
		    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2NTfQLsh0VAUDYPT8!/?WCM_GLOBAL_CONTEXT=" class="spws_menu_marker ">Student Services</a>
		    <div class="spws_megamenu spws_megamenu_1 clearfix">
			    <ul class="clearfix">
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2dDPQLsh0VAclBs-4!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Counselling and Special Needs Support</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ0MzPQLsh0VAf2--CE!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Student Counsellers</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ3cDfULsh0VAeBgMhU!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Personal Tutorship Network (PTN)</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ1MDPQLsh0VAfN57gM!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Special Educational Needs</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ0sTPULsh0VATSCg5Q!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Community Resources & Helplines</a></li>
						    </ul>
					    </div>
				    </li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2dTPULsh0VAXrQfr4!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Education and Career Guidance</a></li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDV38TPQLsh0VAaX4eNI!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Financial Assistance</a></li>
				    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1cDPULsh0VATPB5XE!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Scholarships</a></li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1czfULsh0VAZopywE!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">International Students</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li>
								    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1CzfULsh0VAVS1FWY!/?WCM_GLOBAL_CONTEXT=">Accommodation</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf0tDfULsh0VAR79YA0!/?WCM_GLOBAL_CONTEXT=">Factors to Consider</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf0DDPQLsh0VAY0nEtg!/?WCM_GLOBAL_CONTEXT=">Types of Accommodation</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf19DPQLsh0VATfRbHg!/?WCM_GLOBAL_CONTEXT=">Negotiating Use of Facilities</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf2NzfULsh0VAU1BSX8!/?WCM_GLOBAL_CONTEXT=">Tips on Begin a Good Tenant</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf2DjPQLsh0VAa-XRQI!/?WCM_GLOBAL_CONTEXT=">Notification of Change in Address</a></li>
									    </ul>
								    </div>
							    </li>
							    <li>
								    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0sjfQLsh0VAXYCzno!/?WCM_GLOBAL_CONTEXT=">Finding Your Way / Transportation</a>
								    <div class="spws_megamenu spws_megamenu_3 clearfix">
									    <ul class="clearfix">
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf3dzPQLsh0VAWRtRQo!/?WCM_GLOBAL_CONTEXT=">Locating An Address</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0sTPQLsh0VAd_q4Ao!/?WCM_GLOBAL_CONTEXT=">Public Transport</a></li>
										    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0szPULsh0VAXGYdIw!/?WCM_GLOBAL_CONTEXT=">Looking For A Cheaper Way To Travel</a></li>
									    </ul>
								    </div>
							    </li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0CjPQLsh0VAUAL4GQ!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Cost Of Living</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0CjPULsh0VAeXYvK8!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Health Insurance</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU18DPULsh0VAVSPCkI!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Employment</a></li>
						    </ul>
					    </div>
				    </li>
				    <li>
					    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1CjPULsh0VAfb881s!/?WCM_GLOBAL_CONTEXT=" class="spws_megamenu_1_link ">Student Service Centre</a>
					    <div class="spws_megamenu spws_megamenu_2 clearfix">
						    <ul class="clearfix">
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU2MDPULsh0VASIkXf4!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Blazer Loan</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0cjfULsh0VAZ9PFW4!/?WCM_GLOBAL_CONTEXT=" class="no-child ">EZ Link</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8wzzMDByNgsOM3AJCDAyCzPULsh0VAf3W0sA!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Lost & Found</a></li>
							    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1czfQLsh0VAT_6l8o!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Insurance</a></li>
						    </ul>
						    <ul class="clearfix">
							    <li class="last-child "><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU2cDPULsh0VAQn0NRI!/?WCM_GLOBAL_CONTEXT=" class="no-child ">Forms</a></li>
						    </ul>
					    </div>
				    </li>
			    </ul>
		    </div>
	    </li>
	    <li><a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMnEyMDBz9XbyMfVwdDQ1MTPULsh0VAZxbtYU!/?WCM_GLOBAL_CONTEXT=" class="spws_menu_marker ">Continuing Education</a></li>
    </ul>
</div>