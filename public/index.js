window.onload = function() {

    var socket = new WebSocket('ws://localhost:8000');

    var el = document.getElementById('myColor');

    el.addEventListener('click', function(data) {
        socket.send(data.target.value)
    })

}