using System.Linq;
using SharepointCommon;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.App
{
    public class HomeSlideImagesApp : IDisposable
    {
        private SPPortalApp app = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="webUrl">Web URL need open. If null open current contex</param>
        public HomeSlideImagesApp(string webUrl)
        {
            if (string.IsNullOrEmpty(webUrl))
            {
                app = SPPortalApp.Factory.CurrentContext();
            }
            else
            {
                app = SPPortalApp.Factory.OpenNew(webUrl);
            }
            app.HomeSlideImagesApp.ParentWeb.Web.AllowUnsafeUpdates = true;
        }

        ~HomeSlideImagesApp()
        {
            if (app != null)
            {
                app.HomeSlideImagesApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public void Dispose()
        {
            if (app != null)
            {
                app.HomeSlideImagesApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public List<HomeSlideImagesEntity> GetAll()
        {
            List<HomeSlideImagesEntity> result = null;

            try
            {
                result = app.HomeSlideImagesApp.Items(CamlQuery.Default).ToList();
            }
            catch { }
            return result;
        }

        public HomeSlideImagesEntity GetById(int Id)
        {
            HomeSlideImagesEntity result = null;

            try
            {
                result = app.HomeSlideImagesApp.ById(Id);
            }
            catch { }
            return result;
        }

        public HomeSlideImagesEntity AddNewItem(HomeSlideImagesEntity input)
        {
            try
            {
                app.HomeSlideImagesApp.Add(input);
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
        public HomeSlideImagesEntity UpdateItem(HomeSlideImagesEntity input, Expression<Func<HomeSlideImagesEntity, object>>[] selectors)
        {
            try
            {
                if (selectors != null || selectors.Length == 0)
                {
                    app.HomeSlideImagesApp.Update(input, false, selectors);
                }
                else
                {
                    app.HomeSlideImagesApp.Update(input, false);
                }
            }
            catch { }
            return input;
        }

        public void DeleteById(int Id)
        {
            try
            {
                app.HomeSlideImagesApp.Delete(Id, true);
            }
            catch { }
        }
    }
}
