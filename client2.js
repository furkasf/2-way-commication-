const net = require('net');
const readline = require('readline');

const client = new net.Socket();
client.connect({port:8000,host:'localhost'}, () => {
  console.log('Connected to server');
});
client.on('data', (data) => {
  console.log(data.toString('utf-8'));
  client.destroy()
});

