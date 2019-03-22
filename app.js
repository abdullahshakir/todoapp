var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine

app.set('view engine','ejs');

//static files
app.use('/assets',express.static('./public/assets'));

//fire controllers
todoController(app);

//listen to a port
app.listen(3000);

console.log("Server is started listening to port 3000");