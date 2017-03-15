"use strict";
require("bootstrap/dist/js/bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("./assets/css/main.css");
const _ = require("underscore");
const MeetupClient_1 = require("./services/MeetupClient");
const arrayUtils_1 = require("./Utils/arrayUtils");
const memberList = require('./templates/memberList.tmpl');
let jsonbutton = document.getElementById('jsonbutton');
jsonbutton.addEventListener('click', () => {
    require.ensure([], require => {
        let jsonconfig = require('./config/app.config.json');
        console.log(jsonconfig.app);
    });
});
let loadData = document.getElementById('loaddata');
loadData.addEventListener('click', () => {
    MeetupClient_1.MeetupClient.getEventAssistants('237364644').then(data => {
        let members = data.results.reduce((prev, curr) => {
            prev.push(curr.member.name);
            return prev;
        }, []);
        let m = arrayUtils_1.reduceArray(data.results, (person) => person.member.name);
        console.log(m);
    });
});
var items = [
    { name: "Alexander" },
    { name: "Barklay" },
    { name: "Chester" },
    { name: "Domingo" },
    { name: "Edward" },
    { name: "..." },
    { name: "Yolando" },
    { name: "Zachary" }
];
document.getElementById("target").innerHTML = _.template(memberList)({ items: items });
