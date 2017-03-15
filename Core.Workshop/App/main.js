"use strict";
require("bootstrap/dist/js/bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("./assets/css/main.css");
const TemplateLoader_1 = require("./services/TemplateLoader");
const MeetupClient_1 = require("./services/MeetupClient");
TemplateLoader_1.TemplateLoader.loadHeader(document.getElementById("header"));
// let jsonbutton = document.getElementById('jsonbutton');
// jsonbutton.addEventListener('click', ()=> {
//     require.ensure([], require=> {
//         let jsonconfig: any = require('./config/app.config.json');        
//         console.log(jsonconfig.app);
//     });
// });
let loadData = document.getElementById('loaddata');
loadData.addEventListener('click', () => {
    MeetupClient_1.MeetupClient.getEventAssistants('237364644').then(meetupAssistants => {
        TemplateLoader_1.TemplateLoader.loadAssistantsTable(document.getElementById("assistants"), meetupAssistants);
    });
});
// var items = [
//         {name:"Alexander"},
//         {name:"Barklay"},
//         {name:"Chester"},
//         {name:"Domingo"},
//         {name:"Edward"},
//         {name:"..."},
//         {name:"Yolando"},
//         {name:"Zachary"}
//     ];
// document.getElementById("target").innerHTML = _.template(memberList as string)({items: items});
