using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SingaporePolytechnic.Core.DomainServices
{
    public interface IRepositoryBase<T>
    {
        IEnumerable<T> GetItems(string siteUrl);
    }
}
