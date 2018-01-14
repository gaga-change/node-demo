const http = require("http")
const url = require("url")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
	let pathname = url.parse(req.url).pathname
	let fileName = path.join(__dirname, 'dist' ,pathname)
	if (!path.extname(fileName)) fileName = path.join(fileName, 'index.html')
	getFile(fileName, (err, buffer) => {
		if (err) {
			res.end('file does not exist')
		} else {
			res.end(buffer)
		}
	})
})

function getFile(pathname, callback) {
	try {
		fs.open(pathname, 'r', (err, fd) => {
			if (err) {
				if (err.code === 'ENOENT') {
				  console.error('file does not exist')				  
				}
				callback(err)
				// throw err
				return
			}
			let fileState = fs.fstatSync(fd)
			let buf = new Buffer(fileState.size)
			fs.read(fd, buf, 0, fileState.size, null, (err, bytesRead, buffer) => {
				if (err) {
					console.log(err)
					callback(err)
					// throw err
					return
				}
				// console.log('bytesRead' +bytesRead)
				// console.log(buffer.toString())
				callback(null, buffer)
	 		})
		})
	} catch(err) {
		callback(err)
	}
	
}

server.listen(3000, '127.0.0.1', () => {
	console.log('3000')
})