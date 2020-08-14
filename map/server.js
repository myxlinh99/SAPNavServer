const express = require('express');
const app = express();
const request = require('request');
app.use(express.static("."));

app.get(`/Navigation`, function(req,res) {
	start = req.query.start; //get the data request
	dest = req.query.dest;
	result = {
		"node": "Start Node",
		"moves": "forward"
	}
	res.send(result);
});

app.listen(8080, function(){
	console.log('Server Running...');
});