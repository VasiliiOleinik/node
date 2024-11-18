const http = require('http');

const server = http.createServer((req, res) => {
   const { url, method } = req;

   if(url === '/'){
       res.writeHead(200, {'Content-Type': 'text/html'})
       res.end('<h1>Home</h1>')
    } else if(url === '/projects'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Projects</h1>')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Not Found</h1>')
    }
   
})

server.listen(3000, () => {
    console.log('Server running on port 3000')
})