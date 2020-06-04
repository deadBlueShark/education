const http = require('http')
const url = require('url')

function serverHandler (req, res) {
  const parseUrl = url.parse(req.url, true)
  let path = parseUrl.pathname

  res.setHeader('x-header-date', new Date())
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Home page')
  } else if (path === '/about') {
    // extract query params
    let name = parseUrl.query.name;
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(JSON.stringify({ title: name || 'About page' }))
  } else if (path.startsWith('/user/')) {
    // extract path params
    let regex = new RegExp('/user/(.+)')
    let matchName = regex.exec(path);
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(`Hello ${matchName[1]}`)
  } else {
    res.writeHead(404)
  }
  res.end()
}

const server = http.createServer(serverHandler)
server.listen(8000)
