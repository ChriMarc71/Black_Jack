var express = require('express');
var parser = require('body-parser');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_views'))

app.get('/', (req, res) => {
  res.render('avvertenze');
});
app.post('/menu', (req, res) => {
  res.render('menu');
});
app.post('/blackJack', (req, res) => {
  res.render('blackJack');
});
app.post('/istruzioni', (req, res) => {
  res.render('istruzioni');
});
app.listen(8080, () => {
  console.log('server running on port 5000');
})