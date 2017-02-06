using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Workshop.Model.EventInfo;

namespace Core.Workshop.Infrastructure
{
    public interface IMeetupClient
    {
        Task<EventInfo> GetEventInfo(string groupName, string eventId);
        Task<EventRSVP> GetEventAssistants(string eventId);
    }
}
