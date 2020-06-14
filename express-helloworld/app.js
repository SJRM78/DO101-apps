var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from GDL!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars see u soon!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

