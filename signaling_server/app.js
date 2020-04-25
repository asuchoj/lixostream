const express = require('express');
const taskApi = require('./routes/tasks');
const bodyParser = require('body-parser');
const app = express();

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/tasks', taskApi);

module.exports = app;