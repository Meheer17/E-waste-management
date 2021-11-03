const express = require('express');
var path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get((req, res) => {
    res.render('index');
});

app.route('/about').get((req, res) => {
    res.render('abt');
});

app.route('/contacts').get((req, res) => {
    res.render('con');
});

app.route('/effects').get((req, res) => {
    res.render('eff');
});

app.route('/solutions').get((req, res) => {
    res.render('sol');
});

app.route('/your-part').get((req, res) => {
    res.render('urp');
});

app.route('/introduction').get((req, res) => {
    res.render('intro');
});

app.listen(3000, () => {
  console.log('server started');
});
