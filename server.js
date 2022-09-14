const express = require('express');
const layouts = require('express-ejs-layouts');
const index_router = require('./routes/index');


const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', './layouts/boilerplate');

app.use(layouts);
app.use(express.static('public'));
app.use('/',index_router);


app.listen(process.env.PORT || 3000);