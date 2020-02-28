const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server); //hello I am new

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/color', function(req,res) {
    res.sendFile(__dirname + '/public/color.html');
});

app.get('/controller', function(req,res) {
    res.sendFile(__dirname + '/public/controller.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    //socket = one client
    //socketIO.sockets = all clients
    socket.on('red', function(data) {
        console.log('red event heard');
        socketIO.sockets.emit('color_change', {r:255, g:0, b:0});
    });

    socket.on('green', function(data) {
        console.log('green event heard');
        socketIO.sockets.emit('color_change', {r:0, g:255, b:0});
    });

    socket.on('blue', function(data) {
        console.log('blue event heard');
        socketIO.sockets.emit('color_change', {r:0, g:0, b:255});
    });

    socket.on('up', function(data) {
        console.log('up event heard');
        socketIO.sockets.emit('move_change', {x:0, y:0, z:-2});
    });

    socket.on('left', function(data) {
        console.log('left event heard');
        socketIO.sockets.emit('move_change', {x:-2, y:0, z:0});
    });

    socket.on('right', function(data) {
        console.log('right event heard');
        socketIO.sockets.emit('move_change', {x:2, y:0, z:0});
    });

    socket.on('down', function(data) {
        console.log('down event heard');
        socketIO.sockets.emit('move_change', {x:0, y:0, z:2});
    });

    socket.on('change_requested', function(data) {
        console.log('request for change heard!');
        socketIO.sockets.emit('request_change', {x:0, y:0, z:2});
    });
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);