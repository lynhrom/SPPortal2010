using System.Collections.Generic;

namespace SingaporePolytechnic.Core.DomainServices
{
    public interface IRepositoryBase<T>
    {
        IEnumerable<T> GetItems(string siteUrl);
    }
}
