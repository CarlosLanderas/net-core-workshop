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

        [HttpGet, Route("{groupName}/{eventId}")]
        public async Task<IActionResult> GetEventInfo(string groupName, string eventId)
        {
            var result = await _meetupClient.GetEventInfo(groupName, eventId);
            return Ok(result);
        }

        [HttpGet, Route("{eventId}")]
        public async Task<IActionResult> GetEventAssistants(string eventId)
        {
            return await Task.FromResult<IActionResult>(null);
        }
    }
}
