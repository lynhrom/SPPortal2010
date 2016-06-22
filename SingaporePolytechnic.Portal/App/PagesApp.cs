using System.Linq;
using SharepointCommon;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using SingaporePolytechnic.Portal.Entity;

namespace SingaporePolytechnic.Portal.App
{
    public class PagesApp : IDisposable
    {
        private SPPortalApp app = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="webUrl">Web URL need open. If null open current contex</param>
        public PagesApp(string webUrl)
        {
            if (string.IsNullOrEmpty(webUrl))
            {
                app = SPPortalApp.Factory.CurrentContext();
            }
            else
            {
                app = SPPortalApp.Factory.OpenNew(webUrl);
            }
            app.PagesApp.ParentWeb.Web.AllowUnsafeUpdates = true;
        }

        ~PagesApp()
        {
            if (app != null)
            {
                app.PagesApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public void Dispose()
        {
            if (app != null)
            {
                app.PagesApp.ParentWeb.Web.AllowUnsafeUpdates = false;
                app.Dispose();
                app = null;
            }
        }

        public List<PagesEntity> GetAll()
        {
            List<PagesEntity> result = null;

            try
            {
                result = app.PagesApp.Items(CamlQuery.Default).ToList();
            }
            catch { }
            return result;
        }

        //public List<PagesEntity> GetUpcomming()
        //{
        //    List<PagesEntity> result = null;

        //    try
        //    {
        //        CamlQuery query = new CamlQuery().Query(
        //            Q.Where(
        //                Q.Geq(Q.FieldRef<EventEntity>(i => i.EventDate), Q.Value(DateTime.Now))
        //            )
        //        );

        //        result = app.PagesApp.Items(query).ToList();
        //    }
        //    catch { }
        //    return result;
        //}

        public PagesEntity GetById(int Id)
        {
            PagesEntity result = null;

            try
            {
                result = app.PagesApp.ById(Id);
            }
            catch { }
            return result;
        }

        public PagesEntity AddNewItem(PagesEntity input)
        {
            try
            {
                app.PagesApp.Add(input);
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
        public PagesEntity UpdateItem(PagesEntity input, Expression<Func<PagesEntity, object>>[] selectors)
        {
            try
            {
                if (selectors != null || selectors.Length == 0)
                {
                    app.PagesApp.Update(input, false, selectors);
                }
                else
                {
                    app.PagesApp.Update(input, false);
                }
            }
            catch { }
            return input;
        }

        public void DeleteById(int Id)
        {
            try
            {
                app.PagesApp.Delete(Id, true);
            }
            catch { }
        }
    }
}
