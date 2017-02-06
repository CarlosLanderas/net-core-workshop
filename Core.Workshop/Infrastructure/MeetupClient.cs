using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Core.Workshop.Model.EventInfo;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Core.Workshop.Infrastructure
{
    public class MeetupClient: IMeetupClient, IDisposable
    {
        private readonly HttpClient _httpClient = new HttpClient();
        private readonly string _apiKey;
        public MeetupClient(string apiKey)
        {
            _apiKey = apiKey;
        }
        public async Task<EventInfo> GetEventInfo(string groupName, string eventId)
        {
            var eventInfoUrl  = MeetupUrlHelper.BuildEventInfoUrl(groupName, eventId, _apiKey);
            string eventResult = await _httpClient.GetStringAsync(eventInfoUrl);
            return JsonConvert.DeserializeObject<EventInfo>(eventResult);
        }

        public async Task<EventRSVP> GetEventAssistants(string eventId)
        {
            var eventAssistantsUrl = MeetupUrlHelper.BuildEventAssistantsUrl(eventId, _apiKey);
            string assistanceResult = await _httpClient.GetStringAsync(eventAssistantsUrl);
            return JsonConvert.DeserializeObject<EventRSVP>(assistanceResult);
        }

        public void Dispose()
        {
            _httpClient.Dispose();
        }

     
    }
}
