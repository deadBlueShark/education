const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  // normalize url by removing querystring, optional trailing slash, and making it lowercase
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html')
      break
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html')
      break
    case '/images/eagle.jpg':
      serveStaticFile(res, '/public/images/eagle.jpg', 'image/jpg')
      break
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
      break
  }

})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
  fs.readFile(__dirname + filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      return res.end('500 - Internal Server Error')
    }

    res.writeHead(responseCode, { 'Content-Type': contentType })
    res.end(data)
  })
}
// The core philosophy behind Node is that of event-driven programming.
// Event is implicit: the event that’s being handled is an HTTP request. 
// The http.createServer method takes a function as an argument; that 
// function will be invoked every time an HTTP request is made. Our simple 
// program just sets the content type to plain text and sends the string “Hello world!”

// Serving static resources with Node is suitable for development and small projects, 
// but for larger projects, you will probably want to use a proxy server such as NGINX 
// or a CDN to serve static resources.

// __dirname will resolve to the directory the executing script resides in. So if your 
// script resides in /home/sites/app.js, __dirname will resolve to /home/sites. It’s a 
// good idea to use this handy global whenever possible. Failing to do so can cause 
// hard-to-diagnose errors if you run your app from a different directory.
