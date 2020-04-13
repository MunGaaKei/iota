const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

app.set("views", __dirname + "/views");
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('home', { name: '安崎' });

}).listen(9527);

