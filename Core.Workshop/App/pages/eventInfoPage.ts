const appConfiguration = require('../config/app.config.json') as AppConfiguration;
import { MeetupClient } from '../services/MeetupClient';
import { TemplateLoader } from "../services/TemplateLoader";


loadEventInfo();

document.getElementById("information").addEventListener('click', () => {
    loadEventInfo();
});

function loadEventInfo() {
    MeetupClient.getEventInfo(appConfiguration.groupName, appConfiguration.eventId).then(eventInfo => {
        let domElement = document.getElementById("data-load");
        TemplateLoader.cleanElement(domElement);
        TemplateLoader.loadEventInfo(domElement, eventInfo);
    });
}
