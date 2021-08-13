const net = require('net');
const server = net.createServer();
const fs = require('fs');

server.listen(3000, () => {
});

server.on('connection', (client) => {
  client.on('data', (data) => { // receive data from client
    fs.readFile(data, (error, data) => {
      if (error) throw error;
      const content = Buffer.from(data).toString();
      client.write(`Here is your content: ${content}`);
    })
  })
});








