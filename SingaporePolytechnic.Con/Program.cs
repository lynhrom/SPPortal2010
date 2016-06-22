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
            new GallerySliderRepository().GetItems("http://spportal.edu.sg");

            Console.ReadLine();
        }

    }
}
