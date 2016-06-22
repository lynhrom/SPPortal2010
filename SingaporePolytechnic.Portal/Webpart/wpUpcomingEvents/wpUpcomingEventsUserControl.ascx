<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wpUpcomingEventsUserControl.ascx.cs" Inherits="SingaporePolytechnic.Portal.Webpart.wpUpcomingEvents.wpUpcomingEventsUserControl" %>

<table class="layoutColumn" cellpadding="0" cellspacing="0">
    <tr>
	    <td>
		    <div id='wp_dt8' style='display:block;'></div>
		    <script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt8'></dndTgt>");</script>
	    </td>
    </tr>
    <tr>
	    <td valign="top">
		    <a name="Z7_N8CA14S0JGGB50AMB0SDV82SL0"></a>
		    <div class="wpsPortletBody" style="margin:15px 0px 0px 0px">
			    <h4>Upcoming Events</h4>
			    <div class="lpg-listing matchHeight" id="sphomeevents">
				    <div class='entry'>
					    <div class='lbl'>
						    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjCx8DYEKIoEKDHAARwNC-sP1o8BKnN0dPUzMfQwMLAKMzAw8w4yczR2DQwwNPM2gCvBYUZAbYZDpqKgIAETU5OI!/dl5/d5/L2dJQSEvUUt3QS80SmlFL1o2X1VINUUyRjU0MDAzSjYwSU9TNlNHQkwxNTE2/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/sa-events/parents+forum+2016+june">
						    <a href="http://pforum.sp.edu.sg/" target="_blank" >Parents' Forum 2016</a></a>
					    </div>
					    <div class='date'>25 Jun 16</div>
					    <div style='clear:both;'></div>
				    </div>
				    <div class='entry'>
					    <div class='lbl'>
						    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjCx8DYEKIoEKDHAARwNC-sP1o8BKnN0dPUzMfQwMLAKMzAw8w4yczR2DQwwNPM2gCvBYUZAbYZDpqKgIAETU5OI!/dl5/d5/L2dJQSEvUUt3QS80SmlFL1o2X1VINUUyRjU0MDAzSjYwSU9TNlNHQkwxNTE2/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/sa-events/smart+challenge+2016+%28finals%29">
						    <a href="http://www.sp.edu.sg/wps/portal/vp-spws/spws.teach.activitiesforsu.eventsforstudents#eng" >SMART Challenge 2016 (Finals) </a></a>
					    </div>
					    <div class='date'>Jun 16</div>
					    <div style='clear:both;'></div>
				    </div>
				    <div class='entry'>
					    <div class='lbl'>
						    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjCx8DYEKIoEKDHAARwNC-sP1o8BKnN0dPUzMfQwMLAKMzAw8w4yczR2DQwwNPM2gCvBYUZAbYZDpqKgIAETU5OI!/dl5/d5/L2dJQSEvUUt3QS80SmlFL1o2X1VINUUyRjU0MDAzSjYwSU9TNlNHQkwxNTE2/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/sa-events/toy+design+competition.16+prize+presentation+ceremony">
						    <a href="http://www.sp.edu.sg/wps/portal/vp-spws/spws.teach.activitiesforsu.eventsforstudents#eng" >Toy Design Competition.16 Prize Presentation Ceremony</a></a>
					    </div>
					    <div class='date'>Jul 16</div>
					    <div style='clear:both;'></div>
				    </div>
				    <div class='entry'>
					    <div class='lbl'>
						    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjCx8DYEKIoEKDHAARwNC-sP1o8BKnN0dPUzMfQwMLAKMzAw8w4yczR2DQwwNPM2gCvBYUZAbYZDpqKgIAETU5OI!/dl5/d5/L2dJQSEvUUt3QS80SmlFL1o2X1VINUUyRjU0MDAzSjYwSU9TNlNHQkwxNTE2/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/sa-events/the+clean+water+challenge+2016">
						    <a href="http://www.sp.edu.sg/wps/portal/vp-spws/spws.teach.activitiesforsu.eventsforstudents#built" >The Clean Water Challenge </a></a>
					    </div>
					    <div class='date'>Jul 16</div>
					    <div style='clear:both;'></div>
				    </div>
				    <div class='entry'>
					    <div class='lbl'>
						    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjCx8DYEKIoEKDHAARwNC-sP1o8BKnN0dPUzMfQwMLAKMzAw8w4yczR2DQwwNPM2gCvBYUZAbYZDpqKgIAETU5OI!/dl5/d5/L2dJQSEvUUt3QS80SmlFL1o2X1VINUUyRjU0MDAzSjYwSU9TNlNHQkwxNTE2/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/sa-events/singapore+maritime+academy+reach+%283%29">
						    <a href="http://www.sp.edu.sg/wps/portal/vp-spws/spws.teach.activitiesforsu.eventsforstudents#maritime" >Singapore Maritime Academy Reach Out (SMART) Programme for Uniformed Groups</a></a>
					    </div>
					    <div class='date'>27 Jun - 12 Aug 16</div>
					    <div style='clear:both;'></div>
				    </div>
				    <div class='entry'>
					    <div class='lbl'>
						    <a href="/wps/portal/vp-spws/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJDPUxdjdxMTQz8Q7xMDTz9g10tnVwDjCx8DYEKIoEKDHAARwNC-sP1o8BKnN0dPUzMfQwMLAKMzAw8w4yczR2DQwwNPM2gCvBYUZAbYZDpqKgIAETU5OI!/dl5/d5/L2dJQSEvUUt3QS80SmlFL1o2X1VINUUyRjU0MDAzSjYwSU9TNlNHQkwxNTE2/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/lib-spws/site-spwebsite/sa-events/national+software+competition+%2832nd%29">
						    <a href="http://www.sp.edu.sg/wps/portal/vp-spws/spws.teach.activitiesforsu.eventsforstudents#info" target="_blank" >National Software Competition</a></a>
					    </div>
					    <div class='date'>14 Oct 16</div>
					    <div style='clear:both;'></div>
				    </div>
				    <div class="link">
					    <a target="" title="" href="/wps/portal/vp-spws/spws.fsu.events" >More Events</a>
				    </div>
			    </div>
		    </div>
	    </td>
    </tr>
    <tr>
	    <td>
		    <div id='wp_dt9' style='display:block;'>&nbsp;</div>
		    <script type="text/javascript">document._DNDB.pART("<dndTgt id='wp_dt9'></dndTgt>");</script>
	    </td>
    </tr>
</table>