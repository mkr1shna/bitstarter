var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
	var b = new Buffer(30);
	var k = fs.readFileSync('index.html','utf-8');
	b.write(k, "utf-8");
	response.send(b.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
