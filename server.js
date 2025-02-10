var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send(req.body);
    console.log(req.body)
});

app.listen(process.env.PORT || 8008, function() {
    console.log('Server started on port 8008');
});

module.exports = app; // for testing
