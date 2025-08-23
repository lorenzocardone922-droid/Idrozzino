
// Simple static server for Play.js (iPad/iPhone).
// Open this folder in Play.js, then run this file.
// It serves index.html and static assets at http://localhost:3000
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
  '.json':'application/json', '.csv':'text/csv', '.webmanifest':'application/manifest+json'
};

http.createServer((req, res) => {
  let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type':'text/plain'});
      res.end('Not found');
    } else {
      res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'});
      res.end(data);
    }
  });
}).listen(PORT, () => console.log('Server running on http://localhost:' + PORT));
