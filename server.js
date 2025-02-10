var express = require('express');

var app = express();
app.use(express.json());

app.post('/', function(req, res) {
    const accept = req.get('Accept');
    if (accept) {
        res.setHeader('Accept', accept);
    }

    const resBody = {
        ...req.body
    }
    res.json(resBody);
});

app.listen(process.env.PORT || 8008, function() {
    console.log('Server started on port 8008');
});

module.exports = app; // for testing
