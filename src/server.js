var express = require('express');
var pool = require('../src/database/database')
var routes = require('./routes');

const app = express();
app.use(express.json())
app.use('/app', routes)






app.listen(3000)
console.log('server run')