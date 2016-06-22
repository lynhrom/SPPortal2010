using System.Linq;
using SharepointCommon;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.App
{
    public class QuickLinksApp : IDisposable
    {
        private SPPortalApp app = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="webUrl">Web URL need open. If null open current contex</param>
        public QuickLinksApp(string webUrl)
        {
            if (string.IsNullOrEmpty(webUrl))
            {
                app = SPPortalApp.Factory.CurrentContext();
            }
            else
            {
                app = SPPortalApp.Factory.OpenNew(webUrl);
            }
            app.QuickLinksApp.ParentWeb.Web.AllowUnsafeUpdates = true;
        }

        ~QuickLinksApp()
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
                app.QuickLinksApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public List<QuickLinksEntity> GetAll()
        {
            List<QuickLinksEntity> result = null;

            try
            {
                result = app.QuickLinksApp.Items(CamlQuery.Default).ToList();
            }
            catch { }
            return result;
        }

        public QuickLinksEntity GetById(int Id)
        {
            QuickLinksEntity result = null;

            try
            {
                result = app.QuickLinksApp.ById(Id);
            }
            catch { }
            return result;
        }

        public QuickLinksEntity AddNewItem(QuickLinksEntity input)
        {
            try
            {
                app.QuickLinksApp.Add(input);
            }
            catch { }

            return input;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <param name="selectors">List fields need update. If null or length = 0 update all fields</param>
        /// <returns></returns>
        public QuickLinksEntity UpdateItem(QuickLinksEntity input, Expression<Func<QuickLinksEntity, object>>[] selectors)
        {
            try
            {
                if (selectors != null || selectors.Length == 0)
                {
                    app.QuickLinksApp.Update(input, false, selectors);
                }
                else
                {
                    app.QuickLinksApp.Update(input, false);
                }
            }
            catch { }
            return input;
        }

        public void DeleteById(int Id)
        {
            try
            {
                app.QuickLinksApp.Delete(Id, true);
            }
            catch { }
        }
    }
}
