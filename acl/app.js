var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var acl = require('./service/acl.js');

acl.isAuthorized('/users/get', ["pm"], (err) => console.log(err));
acl.isAuthorized('/users/add', ["pm"], (err) => console.log(err));
acl.isAuthorized('/users/add', ["pm", "admin"], (err) => console.log(err));

module.exports = app;
