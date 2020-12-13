const express = require('express');
const app = new express();
const port = 9000;

app.use(express.static('app'));
app.use(express.static('./'));

app.get('/', (req, res) => {
  res.sendfile('./src/index.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`SAMPLE SERVER LISTENING ON 127.0.0.1:${port}`);
});


// var path = require('path');
// var express = require('express');

// var app = express();

// app.use(express.static(path.join(__dirname, 'dist')));
// app.set('port', process.env.PORT || 8080);

// var server = app.listen(app.get('port'), function() {
//   console.log('listening on port ', server.address().port);
// });