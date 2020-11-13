const express = require('express');
const app = express();

//set home route
/* WITHOUT EJS
app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/views/index.html`);
    res.status(200);
});

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
});
app.get('/secret', (req, res) => {
    res.sendFile(`${__dirname}/views/secrets.html`);
});
*/
//WITH EJS
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index', { myVar: 'wow' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/secrets/:date', (req, res) => {
    res.render('secrets', { date: req.params.date });
});

app.get('/secrets', (req, res) => {
    res.render('secrets', { date: 'today' });
});
//listen for a port
//to see this opne localhost:8000/ in chromw
app.listen(8000, () => console.log('starting server'));