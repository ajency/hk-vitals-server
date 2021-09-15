var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
  request({
    uri: 'https://api.airtable.com/v0/appcn5JFxBMUeiYzA/lab-report?maxRecords',
    qs: {
      api_key: 'keyqyBQVPg55QG4kA'
    }
  }).pipe(res);
});


app.listen(port, () => {
  console.log(`> Ready and listening on http://localhost:${port}`);
});
