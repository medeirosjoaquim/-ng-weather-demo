const express = require('express');
const compression = require('compression')
const path = require('path');
const app = express();

// Serve static files....
app.use(compression());
app.use(express.static(__dirname + '/dist/ng-weather'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME_HERE/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
