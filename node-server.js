const express = require('express');
const app = new express();

app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.get('/', function (request, response) {
    response.sendFile('without-angular-node-server.html', { root: __dirname });
}).listen(8080);