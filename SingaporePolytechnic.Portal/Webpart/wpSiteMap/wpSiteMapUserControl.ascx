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
		<ul id="spsitemap_ns_Z7_UH5E2F540GS780IOLHV5VDPJK7_">
            <asp:Repeater runat="server" ID="rptSitemap">
                <ItemTemplate>
                    <li>
                        <a href="<%# DataBinder.Eval(Container.DataItem, "NavLink") %>" class="link1stLevel" code="<%# DataBinder.Eval(Container.DataItem, "Code") %>""><%# DataBinder.Eval(Container.DataItem, "Title") %></a>
                    </li>
                </ItemTemplate>
            </asp:Repeater>
			<%--<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws3ExMDBx93Qx93fxcDbzNzfQLsh0VAbMgcOg!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Courses</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLwtDPULsh0VAXScK2Q!/?WCM_GLOBAL_CONTEXT=">Full-time Courses</a>
						<ul>
							<li>
								<a href="javascript:void(0);" class="label">Applied Sciences</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydDfQLsh0VAWb2orM!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Applied Chemistry
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydjfQLsh0VAW1Xav4!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Biomedical Science
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydDfULsh0VAcMl_ng!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Biotechnology
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVydjfULsh0VAciENjU!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Chemical Engineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyDDfQLsh0VAahqfNQ!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Food Science & Technology
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyDDfULsh0VAQ25IB8!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Nutrition, Health & Wellness
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyNDPQLsh0VAfktvfk!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Perfumery & Cosmetic Science
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Built Environment</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyNTfULsh0VAYOwIk0!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Architecture
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyNzfULsh0VAYgR6gA!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Civil Engineering with Business
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyDTPULsh0VAdL342A!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Hotel & Leisure Facilities Management
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdzNDfULsh0VAYbW_CI!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Integrated Events & Project Management
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdzNjfULsh0VAY13NG8!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Landscape Architecture
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Business and Management</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVwNDPQLsh0VAdA8Im4!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Accountancy
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVwNjPQLsh0VAdud6iM!/?WCM_GLOBAL_CONTEXT=" target="_blank">Banking & Finance</a>
										<ul>
											<li>
												<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UKMDTyDDP0sjfycDFwMjPQLsh0VAWqg2jo!/" target="_blank">
													<div class="noSubLink"></div>
													Banking
												</a>
											</li>
											<li>
												<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UKMDTyDDP0sjfycDFwMDPQLsh0VAWEBEnc!/" target="_blank">
													<div class="noSubLink"></div>
													Financial Trading
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVwNDPULsh0VAXXvfqU!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Business Administration
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDdyDzfQLsh0VAciOAEA!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Business Innovation & Design
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVzdjfQLsh0VAX5zJQo!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Financial Informatics
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVxNDPULsh0VAWbLMVE!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Human Resource Management with Psychology
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVzdjfULsh0VAdugecE!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Tourism & Resort Management
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQ0sDBwdPV1DTALMDT2dDPULsh0VASUbPIo!/?WCM_GLOBAL_CONTEXT=" target="_blank">Engineering</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUxMjPQLsh0VAeV6T9M!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Aeronautical Engineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwMDPULsh0VAVgslKE!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Aerospace Electronics
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUxMDPULsh0VAUsI21U!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Bioengineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUxMDPQLsh0VAe7bh54!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Common Engineering Programme
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUzcjfQLsh0VAVOwzw4!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Computer Engineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUzcDfULsh0VAf3CW4g!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Electrical & Electronic Engineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwMjPULsh0VAVONXOw!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Energy Systems & Management 
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUzcjfULsh0VAfZjk8U!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Engineering with Business
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8g80MDTyNfU3Mg939DNzdjfQLsh0VAdmO2Lc!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Engineering Systems
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUy8DfQLsh0VASx7p4Q!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Mechanical Engineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUy8jfQLsh0VASfab8k!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Mechatronics & Robotics
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Health Sciences</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8XQNdDTwNg8xd_N1dDVyDjfULsh0VAQYY6FI!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Optometry
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Humanities</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwszJ1NDTwN3cIsXI0MjE1CDPULsh0VAWrhYBk!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Applied Drama & Psychology
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwszJ1NDTwN3cIsXI0MjE1CjPULsh0VAWFAqFQ!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Creative Writing for TV & New Media
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Information and Digital Technologies</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfwNTfQLsh0VAZk7FKY!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Business Information Technology
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfwNzfULsh0VATdJgCA!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Infocomm Security Management
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfyNjfULsh0VAQgajiw!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Information Technology
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfw9TPQLsh0VAWGu5N8!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Music & Audio Technology
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Maritime Studies</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwcDfULsh0VAcf3i-s!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Marine Engineering
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwcjfULsh0VAcxWQ6Y!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Maritime Business
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDUwCDfQLsh0VAay4CUc!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Nautical Studies
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="label">Media & Design</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfwNzfQLsh0VAZKa3Os!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Digital Animation 
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdgTxD_YJsR0UAE05smw!!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Experience & Product Design
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdgTxj_YJsR0UAGO-k1g!!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Games Design & Development
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDdxDDPQLsh0VAXgB7jc!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Interior Design
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwszJ1NDTwN3cIsXI0MjE2MDfQLsh0VAaRALZw!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Media & Communication
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDdxDjPQLsh0VAXOgJno!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Visual Communication & Media Design
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcXcKMDDw9LJyMjSwdDfx9TPULsh0VAddZ9-A!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Visual Effects & Motion Graphics
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DANMTPQLsh0VAcXUlls!/?WCM_GLOBAL_CONTEXT=">Academic Schools</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH2NDfQLsh0VAZTFrjw!/" target="_blank">
									<div class="noSubLink"></div>
									Architecture & the Built Environment
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGxT_YJsR0UAuI98Jg!!/" target="_blank">
									<div class="noSubLink"></div>
									Business
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGwT_YJsR0UAHVwg7Q!!/" target="_blank">
									<div class="noSubLink"></div>
									Communication, Arts & Social Sciences
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMXPzNDTz9g_w83TzMnSwDzfQLsh0VATUiLu0!/" target="_blank">
									<div class="noSubLink"></div>
									Chemical & Life Sciences
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH29zPULsh0VAdRgW1g!/" target="_blank">
									<div class="noSubLink"></div>
									Design
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGwz_YJsR0UAFv3ooA!!/" target="_blank">
									<div class="noSubLink"></div>
									Digital Media & Infocomm Technology
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcgGxz_YJsR0UAsy60aw!!/" target="_blank">
									<div class="noSubLink"></div>
									Electrical & Electronic Engineering
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH3NjfULsh0VASmTdU4!/" target="_blank">
									<div class="noSubLink"></div>
									Mechanical & Aeronautical Engineering
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTH1NzfULsh0VARbAe0I!/" target="_blank">
									<div class="noSubLink"></div>
									Mathematics & Science
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH2dDDz9g_yCQgPcTF0tDPULsh0VAX5ZECY!/" target="_blank">
									<div class="noSubLink"></div>
									Singapore Maritime Academy
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcPYNcDDyd_B0tQr08DN2dDPQLsh0VAb0c7BI!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Diploma-Plus
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsnC0MDDyDfHxDLQJ9jMK8TfQLsh0VAQjw9Sw!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Foreign languages
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws3ExMDBx93Qx93fxcDbxdDPQLsh0VARgJqeM!/?WCM_GLOBAL_CONTEXT=" target="_blank">
							<div class="noSubLink"></div>
							Advanced Elective Modules (AEMs) 
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLx9zPULsh0VAVGLVao!/?WCM_GLOBAL_CONTEXT=">Further Education</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL0NDfULsh0VAQ6ONVA!/?WCM_GLOBAL_CONTEXT=">Advanced Standing</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMzI3MDTxNLF3cg33NjAyMTPQLsh0VAQlYnOQ!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Universities With Advanced Standing
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMzI3MDTxNLF3cg33NjMy8TPQLsh0VAcLPdP0!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Resources For Overseas Studies
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsDDzMDRwNjfw9gj1NDf0tjPULsh0VARbE4D8!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Local Universities
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsDDzMDRwNjfw9gj1NDf39zfQLsh0VAQC74kY!/" target="_blank">
									<div class="noSubLink"></div>
									Scholarships for University Studies
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsDDzMDRwNjfw9gj1NDf39TfULsh0VAa7JdsA!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Resources for Overseas Studies 
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDJ1DzfQLsh0VAfXNLOE!/?WCM_GLOBAL_CONTEXT=" target="_blank">
									<div class="noSubLink"></div>
									Part-time Courses
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDJ1DTfULsh0VAVu_uGc!/?WCM_GLOBAL_CONTEXT=" target="_blank">
									<div class="noSubLink"></div>
									Short Courses/WSQ Courses
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDL0DDPULsh0VAV_J9H0!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Degree Programmes @ SP
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLx9TfQLsh0VAUvytoo!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Admissions</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJzdDfULsh0VAQMn7q0!/?WCM_GLOBAL_CONTEXT=">Admissions Exercises</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJwtTPQLsh0VAXIWA-c!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Joint Admissions Exercise (JAE)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJy9TfULsh0VAWEP3_E!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Joint Polytechnic Admissions Exercise (JPAE)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJzNzPQLsh0VASTM9Po!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Direct Admissions Exercise (DAE)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcfb2MDDx9vF2dgoE8C08D_YJsR0UAg2x9pQ!!/" target="_blank">
									<div class="noSubLink"></div>
									Polytechnic Foundation Programme Admissions Exercise (PFPAE)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwM3LxdDBxNPT2DfUyNDP09zfQLsh0VAbZ2Tfk!/" target="_blank">
									<div class="noSubLink"></div>
									Early Admissions Exercise (EAE)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDE3cDfQLsh0VAYY7oWE!/?WCM_GLOBAL_CONTEXT=">Course Intakes and JAE ELR2B2</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8g0MtDDzNTR0NLAx9LcwdzfULsh0VAbtTmGc!/" target="_blank">
									<div class="noSubLink"></div>
									Course Eligibility Calculator
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjLxdDfQLsh0VATr-yCI!/?WCM_GLOBAL_CONTEXT=">Financial Matters</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQws3J1cDDwt_MJMXZxDDE2MzPQLsh0VARcnqAk!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Course Fees and Fees Payable
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8nR1dDTx9fUNMnf39jJw9DfQLsh0VAQlC6VE!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Scholarships (Based on academic merit and CCA records)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2NjfULsh0VAfjoOCI!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Financial Assistance Schemes
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjJwDzPQLsh0VAfu1khI!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Enrolment
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsAt1dDTxNTF1DfR2dzDzCDPQLsh0VAQsc-Po!/?WCM_GLOBAL_CONTEXT=">International Qualifications</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcvQwsDDydQ9yCfQL9DPxNTfQLsh0VAWOJjss!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Maths
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcvQwsDDydQ9yCfQL9DPxNjfULsh0VAdu5i9Y!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									English
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcvQwsDDydQ9yCfQL9DPx9zPQLsh0VAZC9tv8!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Science
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsLEMMDTzNLfxcAo2dDAOCjfULsh0VATLkSiE!/?WCM_GLOBAL_CONTEXT=" target="_blank">
							<div class="noSubLink"></div>
							Academic Calendar
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8gwwsDDyDDDyNXX1NDL09DPULsh0VAfMW3FI!/" class="link1stLevel" target="_blank">
					<div class="noSubLink"></div>
					<span class="__cf_email__" data-cfemail="a3efcac5c6e3f0f3">[email&#160;protected]</span><script data-cfhash='f9e31' type="text/javascript">/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</script>
				</a>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2NTfQLsh0VAUDYPT8!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Student Services</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2dDPQLsh0VAclBs-4!/?WCM_GLOBAL_CONTEXT=">Counselling and Special Needs Support</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ0MzPQLsh0VAf2--CE!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Student Counsellers
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ3cDfULsh0VAeBgMhU!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Personal Tutorship Network (PTN)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ1MDPQLsh0VAfN57gM!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Special Educational Needs
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8_SzNDByDg429XE2DjQ0sTPULsh0VATSCg5Q!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Community Resources & Helplines
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDU2dTPULsh0VAXrQfr4!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Education and Career Guidance
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMDINMDTy9nJzCAizMDV38TPQLsh0VAaX4eNI!/?WCM_GLOBAL_CONTEXT=" target="_blank">
							<div class="noSubLink"></div>
							Financial Assistance
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1cDPULsh0VATPB5XE!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Scholarships
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1czfULsh0VAZopywE!/?WCM_GLOBAL_CONTEXT=">International Students</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1CzfULsh0VAVS1FWY!/?WCM_GLOBAL_CONTEXT=">Accommodation</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf0tDfULsh0VAR79YA0!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Factors to Consider
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf0DDPQLsh0VAY0nEtg!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Types of Accommodation
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf19DPQLsh0VATfRbHg!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Negotiating Use of Facilities
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf2NzfULsh0VAU1BSX8!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Tips on Begin a Good Tenant
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf2DjPQLsh0VAa-XRQI!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Notification of Change in Address
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0sjfQLsh0VAXYCzno!/?WCM_GLOBAL_CONTEXT=">Finding Your Way / Transportation</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjf3dzPQLsh0VAWRtRQo!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Locating An Address
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0sTPQLsh0VAd_q4Ao!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Public Transport
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0szPULsh0VAXGYdIw!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Looking For A Cheaper Way To Travel
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0CjPQLsh0VAUAL4GQ!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Cost Of Living
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0CjPULsh0VAeXYvK8!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Health Insurance
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU18DPULsh0VAVSPCkI!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Employment
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1CjPULsh0VAfb881s!/?WCM_GLOBAL_CONTEXT=">Student Service Centre</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU2MDPULsh0VASIkXf4!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Blazer Loan
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU0cjfULsh0VAZ9PFW4!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									EZ Link
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8wzzMDByNgsOM3AJCDAyCzPULsh0VAf3W0sA!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Lost & Found
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU1czfQLsh0VAT_6l8o!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Insurance
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzczZxcDByDjYP9TAICjU2cDPULsh0VAQn0NRI!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Forms
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMnEyMDBz9XbyMfVwdDQ1MTPULsh0VAZxbtYU!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel" target="_blank">
					<div class="noSubLink"></div>
					Continuing Education
				</a>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExMjfULsh0VAYPfRD0!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Parents</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAxMjfULsh0VAZTTt3E!/?WCM_GLOBAL_CONTEXT=">Courses</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMnD3dDBxNfIx9PfyDDAxCjPQLsh0VAV9wvRA!/?WCM_GLOBAL_CONTEXT=" target="_blank">Full-time Diploma Courses</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMnD3dDBxNfIx9PfyDDIB8_YJsR0UAxzaUag!!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Course Intakes and JAE ELR2B2
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB19jfQLsh0VAcSVL4s!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Student Success Stories
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsjLxcDRxNzP3dTL2cjA1CDfQLsh0VATS-w9M!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							What Other Parents Say
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB19zfULsh0VAXcE4ts!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Teaching and Learning
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UIMDDzDgtzMPZ2djI0CjfQLsh0VASbcfjc!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Photo Gallery
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcDT1cDRzN3J3dDUMsjUyczfULsh0VARE3JVg!/" target="_blank">
							<div class="noSubLink"></div>
							Career Interest Profiling
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8HS0MDRxNXBxN_b2MDA38DfULsh0VAcYj8V8!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Frequently Asked Questions
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExMTfQLsh0VATvvQSA!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Teachers</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMLDzNDTy9zFwC3N1NjSz8TPQLsh0VASSlisk!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Career Guidance, Talks & Exhibitions
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DH29TPULsh0VAeyII8s!/?WCM_GLOBAL_CONTEXT=">Activities for Teachers</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMQs0dDTydDQI9ncz9jQ0szPQLsh0VAWWmXJ4!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Enrichment Programmes for Teachers
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB0tzPULsh0VAfv7smU!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Teacher Work Attachment (TWA)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF3djfULsh0VAYQRSK8!/?WCM_GLOBAL_CONTEXT=">Activities for Students</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMQs0dDTydDQI9ncz9jQ3MDPULsh0VAYDtZtM!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Events for Students
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDB29DfQLsh0VAfUBN6U!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Young Engineers' Club
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF0tTPULsh0VAVtSMWM!/?WCM_GLOBAL_CONTEXT=">Courses</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAw8jPQLsh0VAdqxVDc!/?WCM_GLOBAL_CONTEXT=" target="_blank">Full-time Diploma Courses</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAw8DPULsh0VAXTDwLE!/?WCM_GLOBAL_CONTEXT=" target="_blank">
											<div class="noSubLink"></div>
											Course Intakes and JAE ELR2B2
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF39DfULsh0VAej-b9E!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Advanced Elective Modules (AEMs)
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsnC0MDDyDfHxDLQJ9PA2MjPULsh0VAXyhciw!/" target="_blank">
									<div class="noSubLink"></div>
									School-Based Courses
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcDT1cDRzN3J3dDUMsjUycTfULsh0VARqW7RU!/" target="_blank">
							<div class="noSubLink"></div>
							Career Interest Profiling
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcfZ1dDBydA51cwnzdDAyMjPQLsh0VAb8-TH8!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Frequently Asked Questions
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMTA0sDDxNHM38vSwMjbxdTfQLsh0VAV5aMzU!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Academic Calendar
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjEwMzPQLsh0VAZdhsT8!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Alumni</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsTH0tDTwtXTzCzM1DDb3djfQLsh0VAZEJ8IM!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							About the Department of Student Development and Alumni Relations (DSA)
						</a>
					</li>
					<li>
						<a href="javascript:void(0);" class="label">Communications</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws3CzdDBw9TUNDQv09jA08jPQLsh0VASDpWDE!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									<span class="__cf_email__" data-cfemail="85c4e9f0e8ebecc5d6d5">[email&#160;protected]</span><script data-cfhash='f9e31' type="text/javascript">/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</script> e-newsletter
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI3CzPULsh0VATBa5Jw!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									SP Alumni Magazine
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMQkKNDByDTc1C3UPDDEzcDfULsh0VAVkkFy0!/?WCM_GLOBAL_CONTEXT=" target="_blank">
									<div class="noSubLink"></div>
									SP Publications
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="javascript:void(0);" class="label">Staying Connected</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU1czfULsh0VAc5dAKg!/?WCM_GLOBAL_CONTEXT=">Alumni community service programmes</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU1CDfULsh0VAR0ihxk!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Local Community Service Project
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU0MTfQLsh0VAVjbszY!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Overseas Community Service Project
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DQJcDBxDDUO8g12cDU1cTfULsh0VAcX8yOU!/?WCM_GLOBAL_CONTEXT=" target="_blank">
									<div class="noSubLink"></div>
									Alumni event or programme
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8DdwsDRxDgy2cvU0NDJzNzPQLsh0VAV_eZxo!/?WCM_GLOBAL_CONTEXT=">Alumni Interest Groups (AIGS)</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsPE2NDBwDDTxM_ExDjC0CTfQLsh0VAVR9uu0!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Join an existing AIG
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwsPE2NDBwDDTxM_ExDjC0CjfULsh0VAexNv_A!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Form an AIG
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbws_LxcDBwDvc38AwJDDN1djPQLsh0VARYDbss!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											FAQs
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI38zPQLsh0VATxbiQM!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									SP Alumni School Representatives
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="javascript:void(0);" class="label">Benefits & Privileges</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMDDxdDBw9_BxD_d1CDP19TfQLsh0VAaVXwkY!/" target="_blank">
									<div class="noSubLink"></div>
									ACE Startups Grant
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDD3dzfQLsh0VASmTK2c!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									SP Alumni Card
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzc3bydDRxdDT2c3SzCDCx8DfULsh0VAWtDPKM!/" target="_blank">
									<div class="noSubLink"></div>
									SP Graduates' Guild
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMgi0cDRy9fQ1N_FwsDAx8DPULsh0VAZYixlc!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Career Portal
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzc3bydDRxdDT2c3SzCDPz9zfQLsh0VAXP6M48!/?WCM_GLOBAL_CONTEXT=" target="_blank">
									<div class="noSubLink"></div>
									Further Studies
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMfHwNDDxD3M0cQ8NcjF1MzfULsh0VAaOaUP4!/" target="_blank">
							<div class="noSubLink"></div>
							Giving Back to SP
						</a>
					</li>
					<li>
						<a href="javascript:void(0);" class="label">Interactive Services</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI3MTfQLsh0VAc9vsTc!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Alumni Directory
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDI3MjfULsh0VAXdftCo!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Update Your Particulars
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzczQIMDDz9LbxNHUPNDD39jfQLsh0VAVifVc8!/?WCM_GLOBAL_CONTEXT=">
									<div class="noSubLink"></div>
									Application Procedures and Forms for Graduates
								</a>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8jS0tDDyDDFx93MydDQ2MDfULsh0VAV1nMYE!/" target="_blank">
									<div class="noSubLink"></div>
									Graduate Employment Survey 
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8vQwNDBwNvE2NzN19DQz8DfULsh0VAdkFPc4!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Data Protection Statement
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TUMMDTxNwlx9jD1cDQw8DPULsh0VAYDMNx8!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Announcements
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMDC0sDBwNLcx9g03MjQwCzfQLsh0VAb0nbwU!/" class="link1stLevel" target="_blank">
					<div class="noSubLink"></div>
					Industry
				</a>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMLP0MDDyDjCyDQyz8DC2CzPULsh0VAYc_rwU!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">
					<div class="noSubLink"></div>
					SP Students
				</a>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMLP0MDDyDjCyDQyz8DP09jPULsh0VAZgmBfs!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">
					<div class="noSubLink"></div>
					Staff
				</a>
			</li>
			<li>
				<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjExCzPULsh0VAcTaFIs!/?WCM_GLOBAL_CONTEXT=" class="link1stLevel">Media</a>
				<ul>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcQ0MNDDy9QsyNXQOcDfwtjfQLsh0VAR1ImN0!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							News Releases
						</a>
					</li>
					<li>
						<a href="javascript:void(0);" class="label">News</a>
						<ul>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMjL3MDDz9g82C3Z18DF1NzPQLsh0VAYFKBSI!/?WCM_GLOBAL_CONTEXT=">News Clippings</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwM_H0NDRxNXV0NXAONDC0MTfULsh0VAR5oGd8!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											Be InSPired
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcw4xdDBwt3Z1c3MMCjd1NTPULsh0VATVnHtY!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2016 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbzcwxxNDBwdXQ0DPV28Dd0tjfQLsh0VAewzCu0!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2015 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbwMQs0sDBz9Pf0MPSwtjQzczfULsh0VAdOD9i4!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2014 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzc3UKMDTyD3Lz8g83NDYPNzPQLsh0VAQ4Ahhs!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2013 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcTcyMDDxNzQ2dvQ2CjZxCjPQLsh0VAbsAUlQ!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2012 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwMTDzMDTx9g4L83YxcjU1cTfQLsh0VAd8tEAM!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2011 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcfUwNDTydvf3N_APdjNzdzPULsh0VAZcSVKc!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2010 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNz9TPQLsh0VAZ9_Q54!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2009 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNz9jPULsh0VASdPRoM!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2008 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNzdzPQLsh0VAfOQZOA!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2007 Archive
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjNzDDPQLsh0VASDv41E!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2006 Archive
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DDx9zPQLsh0VAXgZeUA!/?WCM_GLOBAL_CONTEXT=">SPBuzz Archive</a>
								<ul>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DDzdjPULsh0VAYXXxLQ!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2008
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DDzDzPQLsh0VAfja14M!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2007
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DBwNDPQLsh0VAY9bDW4!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2006
										</a>
									</li>
									<li>
										<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsXM0NDDxNTf0t3Uw9DBwNTPULsh0VATzKwD4!/?WCM_GLOBAL_CONTEXT=">
											<div class="noSubLink"></div>
											2005
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjCwMjPQLsh0VAci0PYE!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Calendar of Events
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8TS0sDDz9LbxNLELCjCzcDfULsh0VAcMoZi4!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Help for Media
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQzcPYNdDDw9TSzMPMIM3C0MjPULsh0VARzFSJM!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							jstest
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQwsghxdDTw9DANd_EItjCxMzPULsh0VAacXOJk!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Archives
						</a>
					</li>
					<li>
						<a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9LJwdDU2CDbz8HS0MDRxNXBxN_b2MDA1CjPQLsh0VAVyZvLw!/?WCM_GLOBAL_CONTEXT=">
							<div class="noSubLink"></div>
							Highlights
						</a>
					</li>
				</ul>
			</li>--%>
		</ul>
	</div>
	<script type="text/javascript">	    compactMenu('spsitemap_ns_Z7_UH5E2F540GS780IOLHV5VDPJK7_', 3);</script>
</div>
