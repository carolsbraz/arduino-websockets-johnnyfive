const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("Server on!") })

var five = require('johnny-five')
const WebSocket = require('ws')
const wss = new WebSocket.Server('https://socket-io-johnny-five-test.herokuapp.com/')

app.use(express.static('public'));

var board = new five.Board();

board.on('ready', function() {

    var led = new five.Led(7)

    wss.on('connection', function(ws, req) {

        console.log('connected')
        ws.on('message', function(data) {
            led.on();
        })

    })

})