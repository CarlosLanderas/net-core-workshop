import * as _ from "underscore";
const headerTemplate = require('../templates/header.tmpl.html');
const assitantsTableTemplate = require('../templates/assistantsTable.tmpl.html');
const logo = require('../assets/images/meetup.png');

export class TemplateLoader {
    
    public static loadHeader( element: HTMLElement): void {
        element.innerHTML = _.template(headerTemplate as string)({ logo });
    }

    public static loadAssistantsTable(element: HTMLElement, assistants: Array<MeetUp.MeetupAssistant>): void {
        element.innerHTML = _.template(assitantsTableTemplate as string)({ assistants });
    }
}

