using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;
using SharepointCommon;
using SingaporePolytechnic.Core.DomainServices;
using SingaporePolytechnic.Core.Model;
using SingaporePolytechnic.Infrastructure.DomainServices;

namespace SingaporePolytechnic.Con
{
    class Program
    {
        static void Main(string[] args)
        {
            var items = new CalendarRepository().GetItems("http://spportal.edu.sg");
            //using (var app = SPPortalApplication.Factory.OpenNew("http://spportal.edu.sg"))
            //{
            //    var items = app.UpcomingEvents.GetFields(false);
            //    foreach (var field in items)
            //    {
            //        Console.WriteLine(field.Name);
            //    }
            //}

            Console.ReadLine();
        }

    }
}
