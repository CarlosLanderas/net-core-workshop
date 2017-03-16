import axios from "axios";

export class MeetupClient {

    static apiURL: string = `http://${document.location.host}/api`;

    public static getEventAssistants(eventId: string): Promise<Array<MeetUp.MeetupAssistant>> {
        return new Promise((resolve, reject) => {
            axios.get(`${MeetupClient.apiURL}/meetup/assistants/${eventId}`).then(response => {
                resolve(response.data as Array<MeetUp.MeetupAssistant>);
            }).catch(error => {
                reject(error);
            });
        });
    }

    public static getEventInfo(groupName: string, eventId: string): Promise<MeetUp.MeetupEvent>{        
          return new Promise((resolve, reject) => {
            axios.get(`${MeetupClient.apiURL}/meetup/event/${groupName}/${eventId}`).then(response => {
                resolve(response.data as Array<MeetUp.MeetupEvent>);
            }).catch(error => {
                reject(error);
            });
        });
    }
}