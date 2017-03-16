import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

const appConfiguration = require('./config/app.config.json') as AppConfiguration;

import { TemplateLoader } from "./services/TemplateLoader";
import  { MeetupClient } from './services/MeetupClient';


TemplateLoader.loadHeader(document.getElementById("header"));


MeetupClient.getEventInfo(appConfiguration.groupName, appConfiguration.eventId).then( eventInfo => {
    let keys = Object.keys(eventInfo);
    keys.forEach(k => {
        console.log(eventInfo[k]);
    });
});

// let jsonbutton = document.getElementById('jsonbutton');
// jsonbutton.addEventListener('click', ()=> {
//     require.ensure([], require=> {
//         let jsonconfig: any = require('./config/app.config.json');        
//         console.log(jsonconfig.app);
//     });
// });

let loadData = document.getElementById('assistants');
loadData.addEventListener('click', ()=> {
    MeetupClient.getEventAssistants(appConfiguration.eventId).then( meetupAssistants => {
        TemplateLoader.loadAssistantsTable(document.getElementById("assistants-table"), meetupAssistants);        
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





