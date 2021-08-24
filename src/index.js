const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

// HTTP LOGGER
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', function (req, res) {
  res.render('home');
})
app.get('/news', function (req, res) {
  res.render('news');
})
 
app.listen(port)