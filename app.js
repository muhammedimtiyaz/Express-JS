const express = require('express');
const app = express();
const index = require('./routes/index_routes');

// app.use('/index', index);

// app.get('/', function(req, res) {
//   res.send('Hello world!');
// });

// app.post('/hello', function(req, res) {
//   res.send("you just called the post method at '/hello'!\n");
// });

// app.all('/test', function(req, res) {
//   res.send("HTTP request does not affect this route.\n");
// });

// app.get('/:id', function(req, res) {
//   res.send('the id you specified is ' + req.params.id);
// });

// app.get('/things/:id[0-9]{5}', function(req, res) {
//   res.send('The id you specified is ' + req.params.id);
// });

// app.get('/things/:name/:id', function(req,res) {
//   res.send('id: ' + req.params.id + " and name: " + req.params.name);
// });

// app.use('/things', function(req, res, next) {
//   console.log('A request for things has been made at ' + Date.now());
//   next();
// });

// app.get('/things', function(req, res) {
//   res.send('Things');
// });

app.use(function(req, res, next) {
  console.log('Start');
  next();
});

app.get('/', function(req, res, next) {
  res.send('Middle');
  next();
});

app.use('/', function(req, res) {
  console.log('End');
});

app.get('*', function(req, res) {
  res.send('Sorry, the URL you requested cannot be found :(');
});

app.listen(3000);