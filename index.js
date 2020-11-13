const express = require('express');
const app = express();

//set home route /
app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/about', (req, res) => {
    res.send('About page')
})

//listen for a port
//to see this opne localhost:8000/ in chromw
app.listen(8000);