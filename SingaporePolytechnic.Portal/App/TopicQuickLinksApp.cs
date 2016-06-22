using System.Linq;
using SharepointCommon;
using System;
using System.Collections.Generic;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.App
{
    class TopicQuickLinksApp : IDisposable
    {
        private SPPortalApp app = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="webUrl">Web URL need open. If null open current contex</param>
        public TopicQuickLinksApp(string webUrl)
        {
            if (string.IsNullOrEmpty(webUrl))
            {
                app = SPPortalApp.Factory.CurrentContext();
            }
            else
            {
                app = SPPortalApp.Factory.OpenNew(webUrl);
            }
            app.TopicQuickLinksApp.ParentWeb.Web.AllowUnsafeUpdates = true;
        }

        ~TopicQuickLinksApp()
        {
            if (app != null)
            {
                app.QuickLinksApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }
        public void Dispose()
        {
            if (app != null)
            {
                app.TopicQuickLinksApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public List<TopicQuickLinksEntity> GetAll()
        {
            List<TopicQuickLinksEntity> result = null;

            try
            {
                result = app.TopicQuickLinksApp.Items(CamlQuery.Default).ToList();
            }
            catch { }
            return result;
        }
    }
}
