import * as _ from "underscore";
const headerTemplate = require('../templates/header.tmpl.html');
const assitantsTableTemplate = require('../templates/assistantsTable.tmpl.html');
const eventInfoTemplate = require('../templates/eventInfo.tmpl.html');
const logo = require('../assets/images/meetup.png');
const noPhotoLogo = require('../assets/images/no_photo.png');

export class TemplateLoader {
    
    public static loadHeader( element: HTMLElement): void {
        element.innerHTML = _.template(headerTemplate as string)({ logo });
    }

    public static loadAssistantsTable(element: HTMLElement, assistants: Array<MeetUp.MeetupAssistant>): void {
        element.innerHTML = _.template(assitantsTableTemplate as string)({ assistants, noPhotoLogo });
    }

    public static loadEventInfo(element: HTMLElement, eventInfo: MeetUp.MeetupEvent): void {
        element.innerHTML = _.template(eventInfoTemplate as string)({eventInfo});
    }

    public static cleanElement(element: HTMLElement){
        element.innerHTML = '';
    }
}

