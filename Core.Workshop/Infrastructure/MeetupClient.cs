using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
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
        public async Task<dynamic> GetEventInfo(string groupName, string eventInfo)
        {
            var eventInfoUrl  = MeetupUrlHelper.BuildEventInfoUrl(groupName, eventInfo, _apiKey);
            dynamic eventResult = await _httpClient.GetStringAsync(eventInfoUrl);
            return JObject.Parse(eventResult);
        }

        public dynamic GetEventAssistants()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            _httpClient.Dispose();
        }
    }
}
