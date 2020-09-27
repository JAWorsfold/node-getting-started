// const http = require('http');

// this
// import http from 'http';

// or
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('Welcome to the world of ECMAScript...\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
