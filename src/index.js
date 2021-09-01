const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const sortMiddleware = require('./app/Middleware/sortMiddleware');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// middleware sort
app.use(sortMiddleware);

app.use(methodOverride('_method'));
// HTTP LOGGER
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, _sort) =>{
                const sortType = field === _sort.column ? _sort.type : 'default';

                const icons = {
                    default: 'fa-arrows-alt-v',
                    asc: 'fa-angle-up',
                    desc: 'fa-angle-down'
                };
                const types = {
                    default: 'desc',
                    desc: 'asc',
                    asc: 'desc',
                };
                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}"><i class="fas ${icon}"></i></a>`;
            }
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

//Routes init
route(app);

app.listen(port);