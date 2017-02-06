import axios from "axios";

export class MeetupClient {

    static apiURL: string = `http://${document.location.host}/api`;

    public static getEventAssistants(eventId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(`${MeetupClient.apiURL}/meetup/assistants/${eventId}`).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}