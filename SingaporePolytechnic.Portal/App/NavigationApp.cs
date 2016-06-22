using System.Linq;
using SharepointCommon;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.App
{
    public class NavigationApp : IDisposable
    {
        private SPPortalApp app = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="webUrl">Web URL need open. If null open current contex</param>
        public NavigationApp(string webUrl)
        {
            if (string.IsNullOrEmpty(webUrl))
            {
                app = SPPortalApp.Factory.CurrentContext();
            }
            else
            {
                app = SPPortalApp.Factory.OpenNew(webUrl);
            }

            app.QueryWeb.Web.AllowUnsafeUpdates = true;
        }

        //~NavigationApp()
        //{
        //    if (app != null)
        //    {
        //        app.QueryWeb.Web.AllowUnsafeUpdates = false;
        //        app.Dispose();
        //        app = null;
        //    }
        //}

        public void Dispose()
        {
            if (app != null)
            {
                app.NavigationApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public IEnumerable<NavigationEntity> GetItems()
        {
            return app.NavigationApp.Items(CamlQuery.Default);
        }

        public IList<NavigationEntity> GetAll()
        {
            List<NavigationEntity> result = null;

            try
            {
                result = app.NavigationApp.Items(CamlQuery.Default).ToList();
            }
            catch { }
            return result;
        }

        public NavigationEntity GetById(int Id)
        {
            NavigationEntity result = null;

            try
            {
                result = app.NavigationApp.ById(Id);
            }
            catch { }
            return result;
        }

        public NavigationEntity AddNewItem(NavigationEntity input)
        {
            try
            {
                app.NavigationApp.Add(input);
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
        public NavigationEntity UpdateItem(NavigationEntity input, Expression<Func<NavigationEntity, object>>[] selectors)
        {
            try
            {
                if (selectors != null || selectors.Length == 0)
                {
                    app.NavigationApp.Update(input, false, selectors);
                }
                else
                {
                    app.NavigationApp.Update(input, false);
                }
            }
            catch { }
            return input;
        }

        public void DeleteById(int Id)
        {
            try
            {
                app.NavigationApp.Delete(Id, true);
            }
            catch { }
        }
    }
}
