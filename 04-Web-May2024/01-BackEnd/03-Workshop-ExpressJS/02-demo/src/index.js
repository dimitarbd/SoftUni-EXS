const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const hbs = handlebars.create();

app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);
