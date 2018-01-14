const http = require('http')
const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('X-Foo', 'bar');
  //response.setHeader() 设置的响应头会与 response.writeHead() 设置的响应头合并，且 response.writeHead() 的优先。
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
})

server.listen(3000, '127.0.0.1', () => {
	console.log('3000')
})