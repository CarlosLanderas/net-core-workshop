import { TemplateLoader } from "../services/TemplateLoader";
const appConfiguration = require('../config/app.config.json') as AppConfiguration;
import { MeetupClient } from '../services/MeetupClient';

const loadEventAssistants = () => {
    let domElement = document.getElementById("data-load");
    MeetupClient.getEventAssistants(appConfiguration.eventId).then(meetupAssistants => {
        TemplateLoader.cleanElement(domElement)
        TemplateLoader.loadAssistantsTable(domElement, meetupAssistants);
    });
}

export default loadEventAssistants;