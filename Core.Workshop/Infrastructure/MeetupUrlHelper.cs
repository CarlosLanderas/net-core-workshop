using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Workshop.Infrastructure
{
    public class MeetupUrlHelper
    {
        public static string BuildEventInfoUrl(string groupName, string eventId, string apiKey)
        {
            return $"https://api.meetup.com/{groupName}/events/{eventId}?key={apiKey}";
        }
    }
}
