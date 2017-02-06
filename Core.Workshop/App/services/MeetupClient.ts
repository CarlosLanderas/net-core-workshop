import axios from "axios";

const apiURL = `http://${document.location.host}/api`;

export  function GetEventAssistants(eventId: string): Promise<any> {
    return new Promise( (resolve, reject) => {
        axios.get(`${apiURL}/meetup/assistants/${eventId}`).then( response => {
            resolve(response.data);
        }).catch( error => {
            reject(error);
        });
    });
}