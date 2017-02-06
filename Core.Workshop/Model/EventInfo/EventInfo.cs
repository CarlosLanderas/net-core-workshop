using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Workshop.Model.EventInfo
{
    public class EventInfo
    {
        public long created { get; set; }
        public int duration { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public int rsvp_limit { get; set; }
        public string status { get; set; }
        public long time { get; set; }
        public long updated { get; set; }
        public int utc_offset { get; set; }
        public int waitlist_count { get; set; }
        public int yes_rsvp_count { get; set; }
        public Venue venue { get; set; }
        public Group group { get; set; }
        public string link { get; set; }
        public string description { get; set; }
        public string visibility { get; set; }
    }

    public class EventRSVP
    {
        public List<Result> results { get; set; }
        public Meta meta { get; set; }
    }

    public class Venue
    {
        public int id { get; set; }
        public string name { get; set; }
        public double lat { get; set; }
        public double lon { get; set; }
        public bool repinned { get; set; }
        public string address_1 { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public string localized_country_name { get; set; }
    }

    public class Group
    {
        public long created { get; set; }
        public string name { get; set; }
        public int id { get; set; }
        public string join_mode { get; set; }
        public double lat { get; set; }
        public double lon { get; set; }
        public string urlname { get; set; }
        public string who { get; set; }
    }

    public class Member
    {
        public int member_id { get; set; }
        public string name { get; set; }
    }

    public class Event
    {
        public string name { get; set; }
        public string id { get; set; }
        public object time { get; set; }
        public string event_url { get; set; }
    }


    public class MemberPhoto
    {
        public string highres_link { get; set; }
        public int photo_id { get; set; }
        public string base_url { get; set; }
        public string type { get; set; }
        public string photo_link { get; set; }
        public string thumb_link { get; set; }
    }

    public class Result
    {
        public Venue venue { get; set; }
        public object created { get; set; }
        public string response { get; set; }
        public int guests { get; set; }
        public Member member { get; set; }
        public int rsvp_id { get; set; }
        public object mtime { get; set; }
        public Event @event { get; set; }
        public Group group { get; set; }
        public MemberPhoto member_photo { get; set; }
        public List<string> answers { get; set; }
    }

    public class Meta
    {
        public string next { get; set; }
        public string method { get; set; }
        public int total_count { get; set; }
        public string link { get; set; }
        public int count { get; set; }
        public string description { get; set; }
        public string lon { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string id { get; set; }
        public long updated { get; set; }
        public string lat { get; set; }
    }




}
