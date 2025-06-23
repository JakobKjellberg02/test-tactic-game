const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { console.log("User connected!") });

server.listen(8080, () => {
  console.log('Server listening on ' + server.address().port);
});


