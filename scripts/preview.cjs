const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { pages, privatePaths } = require('../src/seo/config.json');

const buildDirectory = path.resolve(__dirname, '../build');
const routes = new Set([...Object.keys(pages), ...privatePaths]);
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
};

http
  .createServer((request, response) => {
    let route;
    try {
      route = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    } catch {
      response.writeHead(400).end('Invalid URL');
      return;
    }
    const relativeFile =
      route === '/'
        ? 'index.html'
        : routes.has(route)
          ? `${route.slice(1)}.html`
          : route.slice(1);
    let filename = path.resolve(buildDirectory, relativeFile);
    if (!filename.startsWith(buildDirectory + path.sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    let status = 200;
    if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
      filename = path.join(buildDirectory, '404.html');
      status = 404;
    }
    response.writeHead(status, {
      'Content-Type': contentTypes[path.extname(filename)] || 'application/octet-stream',
    });
    fs.createReadStream(filename).pipe(response);
  })
  .listen(3002, '127.0.0.1', () => {
    console.log('Production preview: http://127.0.0.1:3002');
  });
