const fs = require('fs')

fs.readFile('./dist/demo.txt', (err, data) => {
	if (err) {
		console.err(err)
	} else {
		// console.log(data)
		console.log(data.toString())
	}
})

// fs.readFile('./dist/index.html', (err, data) => {
// 	if (err) {
// 		console.err(err)
// 	} else {
// 		// console.log(data)
// 		console.log(data.toString())
// 	}
// })