"use strict";
let logo = require("./images/usermessage.png");
let jsonbutton = document.getElementById('jsonbutton');
jsonbutton.addEventListener('click', () => {
    require.ensure([], require => {
        let jsonconfig = require('./config/app.config.json');
        console.log(jsonconfig.app);
    });
});
