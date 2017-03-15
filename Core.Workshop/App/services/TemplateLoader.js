"use strict";
const _ = require("underscore");
const headerTemplate = require('../templates/header.tmpl.html');
const logo = require('../assets/images/meetup.png');
class TemplateLoader {
    static loadHeader(targetElement) {
        document.getElementById(targetElement).innerHTML = _.template(headerTemplate)({ logo });
    }
}
exports.TemplateLoader = TemplateLoader;
