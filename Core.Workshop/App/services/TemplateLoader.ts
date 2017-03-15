import * as _ from "underscore";
const headerTemplate = require('../templates/header.tmpl.html');
const logo = require('../assets/images/meetup.png');

export class TemplateLoader {
    
    public static loadHeader(targetElement: string): void {
        document.getElementById(targetElement).innerHTML = _.template(headerTemplate as string)({ logo });
    }
}

