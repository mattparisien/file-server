const args = process.argv.slice(2);
const path = args[0];
const fs = require('fs')
const { Server } = require('http');
const net = require('net');
const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.on('data', (data) => { // allow data from server
  console.log('Server says:', data)
})

conn.on('connect', (error) => { // write to Server
  if (error) throw error;
  fs.exists(path, (isTrue) => {
    if (!isTrue) {
      throw new Error('File does not exist.')
    }
  })
  conn.write(path);
});

console.log('Loading...')

conn.setEncoding('utf8'); // interpret data as text


