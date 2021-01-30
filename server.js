const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("Server on!") })

var five = require('johnny-five')
const WebSocket = require('ws')
const wss = new WebSocket.Server('https://socket-io-johnny-five-test.herokuapp.com/')

app.use(express.static('public'));

wss.on('connection', function(ws, req) {
    console.log('connected')
})