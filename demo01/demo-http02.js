const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
	fs.readFile('./dist/index.html', (err, data) => {
		if (err) {
			console.err(err)
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(data);
		}
	})
  
})

server.listen(3000, '127.0.0.1', () => {
	console.log('3000')
})