const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Welcome to the world of tomorrow...\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
