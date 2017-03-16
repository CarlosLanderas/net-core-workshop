import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

import { TemplateLoader } from "./services/TemplateLoader";
const appConfiguration = require('./config/app.config.json') as AppConfiguration;
import  { MeetupClient } from './services/MeetupClient';


TemplateLoader.loadHeader(document.getElementById("header"));
import "./pages/eventInfoPage";

// let jsonbutton = document.getElementById('jsonbutton');
// jsonbutton.addEventListener('click', ()=> {
//     require.ensure([], require=> {
//         let jsonconfig: any = require('./config/app.config.json');        
//         console.log(jsonconfig.app);
//     });
// });

let loadData = document.getElementById('assistants');
loadData.addEventListener('click', ()=> {
    let domElement = document.getElementById("data-load");
    MeetupClient.getEventAssistants(appConfiguration.eventId).then( meetupAssistants => {
        TemplateLoader.cleanElement(domElement)
        TemplateLoader.loadAssistantsTable(domElement, meetupAssistants);        
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





