/* ================================================================
   Servidor NodeJS para enviar os eventos para os clientes
   Utiliza o módulo socket.io 
   ================================================================ */ 
   

// Instanciando os módulos HTTP, FS (File System) e Socket.io.
var http = require('http').createServer(index), 
    io   = require('socket.io').listen(http), 
    fs   = require('fs');
 
// Configurando a porta de listen do servidor.
http.listen(8080);
 
// Método de requisição para apresentar a página index.html.
function index(req, res){
    res.writeHead(200);
    res.end('Greetings, welcome. I want to play a game...');
};

// Iniciando o Socket.IO através do evento "Connection".
io.sockets.on('connection', function(socket) {
    socket.emit('message', 'Trying to connect in the server, hold on...');

    socket.on('prev', function() {
        socket.broadcast.emit('prev');
    });

    socket.on('next', function() {
        socket.broadcast.emit('next');
    });
});