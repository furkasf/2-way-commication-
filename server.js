/* 
callback listener take socket parametter this socket not refet to client socket it server socket which connect whith client socket
we made all procces to on server socket trough to client socket.

client socket otherside of tcp connection server socket is another side of tcp connection

*/
const log = (n) => console.log(n)
const net = require('net')
const sever = net.createServer((socket) =>{
    socket.write('ok')
    socket.on('data', (buffer) => {
        log('connection from:'+socket.remoteAddress+'port:'+socket.remotePort)
        log(buffer)
        socket.write(buffer.toString('utf-8').toUpperCase())
    })
    socket.on('close', (err) => log(err.stack))
    socket.on('end', () => {//after file send back to client server close its socket also this mean cut connection
        log('connection ended')
    })
    socket.on('close',() => console.log('conection closed by cleint'))//when connection closed by client this event accur
})

sever.maxConnections = 20;

sever.listen({host:'localhost', port:8000})

//server take input from client and spilit chunk this massage and convert uppercase and send back to client
//but server not able to read message just direct message