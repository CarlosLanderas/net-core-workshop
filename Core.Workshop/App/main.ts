import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

import axios from "axios";
import { TemplateLoader } from "./services/TemplateLoader";
import  { MeetupClient } from './services/MeetupClient';
import { reduceArray } from './Utils/arrayUtils';

TemplateLoader.loadHeader(document.getElementById("header"));




// let jsonbutton = document.getElementById('jsonbutton');
// jsonbutton.addEventListener('click', ()=> {
//     require.ensure([], require=> {
//         let jsonconfig: any = require('./config/app.config.json');        
//         console.log(jsonconfig.app);
//     });
// });

let loadData = document.getElementById('loaddata');
loadData.addEventListener('click', ()=> {
    MeetupClient.getEventAssistants('237364644').then( meetupAssistants => {
        TemplateLoader.loadAssistantsTable(document.getElementById("assistants"), meetupAssistants);        
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





