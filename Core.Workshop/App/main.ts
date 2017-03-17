import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

import { TemplateLoader } from "./services/TemplateLoader";
const appConfiguration = require('./config/app.config.json') as AppConfiguration;
import { MeetupClient } from './services/MeetupClient';

TemplateLoader.loadHeader(document.getElementById("header"));
import "./pages/eventInfoPage";


let loadData = document.getElementById('assistants');
loadData.addEventListener('click', () => {
    require.ensure([], require => {
        var eventAssistants: () => void = require('./pages/eventAssistantsPage').default;
        eventAssistants();
    }, 'assistantsChunk');

});






