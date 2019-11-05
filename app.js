const express = require('express');
const indexRouter = require('./routes/index');

var app = express();

app.use(express.json());

app.use('/', indexRouter);

module.exports = app;
