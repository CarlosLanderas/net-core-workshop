using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Workshop.Infrastructure
{
    public interface IMeetupClient
    {
        Task<dynamic> GetEventInfo(string groupName, string eventInfo);
        dynamic GetEventAssistants();
    }
}
