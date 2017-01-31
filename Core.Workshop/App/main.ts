import axios from "axios";


let logo = require("./images/usermessage.png");

let jsonbutton = document.getElementById('jsonbutton');
jsonbutton.addEventListener('click', ()=> {
    require.ensure([], require=> {
        let jsonconfig: any = require('./config/app.config.json');        
        console.log(jsonconfig.app);
    });
});





