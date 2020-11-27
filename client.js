// A use-once client for the capitalization server.
//
// we needsocket contractor to creat new socket for each connection 
//
// net.creatconnection() not ıse to creeat socket just use to attrackt socketo server contein server destination address and port
//but we can use connet() with attract client to achive same thing
//
//it may (net.creatconnection()) server side I try use this method to estamblish connection with server but it didnt work it probly sourch
//this constractor use in client side
//
//   node onetimecapitalizeclient.js 10.0.1.40 'string to capitalize'

const net = require('net');

const client =new net.Socket();

client.connect({host:'localhost', port:8000}, () => {
  client.write('lolololo')
  client.on('data', () => client.end())
  client.on('error', (err) => console.log('error acure'+err))
  client.end('end', () => console.log('socket closed'))
})

//when we remove destoroy() anstead of use end() it allow to write one more text before client close its socket

