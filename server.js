const express = require('express');
const compression = require('compression')
const path = require('path');
const app = express();

// Serve static files....
app.use(compression());
app.use(express.static(__dirname + '/dist/ng-weather'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ng-weather/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(404).send('Something broke!')
})

// default Heroku PORT
app.listen(process.env.PORT || 3000);
