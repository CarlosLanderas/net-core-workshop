using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Workshop.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace Core.Workshop.Controllers
{
    [Route("api/[controller]")]
    public class MeetupController: Controller
    {
        private readonly IMeetupClient _meetupClient;
        public MeetupController(IMeetupClient meetupClient)
        {
            _meetupClient = meetupClient;
        }

        [HttpGet, Route("event/{groupName}/{eventId}")]
        public async Task<IActionResult> GetEventInfo(string groupName, string eventId)
        {
            var result = await _meetupClient.GetEventInfo(groupName, eventId);
            var eventInfo = new
            {
                Name = result.name,
                Location = result.venue.name,
                Address = result.venue.address_1,
                Description = result.description
            };

            return Ok(eventInfo);
        }

        [HttpGet, Route("assistants/{eventId}")]
        public async Task<IActionResult> GetEventAssistants(string eventId)
        {
            var result = await _meetupClient.GetEventAssistants(eventId);
            var members = result.results.Select(m => new {
                Group = m.group.urlname,
                Member = m.member,
                Photo = m.member_photo,
                Response = m.response
            });
            return Ok(members);
        }
    }
}
