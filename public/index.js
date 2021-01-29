window.onload = function() {

    var socket = new WebSocket(`https://socket-io-johnny-five-test.herokuapp.com/`);

    var el = document.getElementById('myColor');

    el.addEventListener('click', function(data) {
        socket.send(data.target.value)
    })

}