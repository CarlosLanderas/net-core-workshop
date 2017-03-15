"use strict";
const _ = require("underscore");
const headerTemplate = require('../templates/header.tmpl.html');
const assitantsTableTemplate = require('../templates/assistantsTable.tmpl.html');
const logo = require('../assets/images/meetup.png');
class TemplateLoader {
    static loadHeader(element) {
        element.innerHTML = _.template(headerTemplate)({ logo });
    }
    static loadAssistantsTable(element, assistants) {
        element.innerHTML = _.template(assitantsTableTemplate)({ assistants });
    }
}
exports.TemplateLoader = TemplateLoader;
