const express = require('express');

const app = express();


app.use(express.static('public'));
app.set('view engine', 'html');

app.route('/').get((req, res) => {
    res.sendFile(process.cwd() + '/html/index.html');
});

app.route('/about').get((req, res) => {
    res.sendFile(process.cwd() + '/html/abt.html');
});

app.route('/contacts').get((req, res) => {
    res.sendFile(process.cwd() + '/html/con.html');
});

app.route('/effects').get((req, res) => {
    res.sendFile(process.cwd() + '/html/eff.html');
});

app.route('/solutions').get((req, res) => {
    res.sendFile(process.cwd() + '/html/sol.html');
});

app.route('/your-part').get((req, res) => {
    res.sendFile(process.cwd() + '/html/urp.html');
});

app.route('/introduction').get((req, res) => {
    res.sendFile(process.cwd() + '/html/intro.html');
});

app.listen(3000, () => {
  console.log('server started');
});
