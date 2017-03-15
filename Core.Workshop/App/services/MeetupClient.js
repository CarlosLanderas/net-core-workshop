"use strict";
const axios_1 = require("axios");
class MeetupClient {
    static getEventAssistants(eventId) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`${MeetupClient.apiURL}/meetup/assistants/${eventId}`).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}
MeetupClient.apiURL = `http://${document.location.host}/api`;
exports.MeetupClient = MeetupClient;
