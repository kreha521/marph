var express = require('express');

var app = express();

var acl = require('./acl.js');

acl.isAuthorized('/users/get', ["pm"], (err) => {
    if(err) console.log(err)
});
acl.isAuthorized('/users/add', ["pm"], (err) => {
    if(err) console.log(err)
});
acl.isAuthorized('/users/add', ["pm", "admin"], (err) => {
    if(err) console.log(err)
});

module.exports = app;
