/* Import node's http module: */
const http = require('http');
const utils = require('./utils');
const url = require('url');

const port = 3003;
const ip = '127.0.0.1';

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

const router = {
  '/restaurants/*/reviews': () => 0,
  '/restuarants/*': () => 1,
};

const matchRuleShort = (str, rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(str);

const server = http.createServer((req, res) => {
  let route = '';
  for (let i = 0; i < Object.keys(router).length; i += 1) {
    if (matchRuleShort(url.parse(req.url).pathname, router[Object.keys(router)[i]])) {
      route = url.parse(req.url);
    }
  }
  if (route) {
    route(req, res);
  } else {
    const status = 404;
    res.writeHead(status, headers);
    res.end();
  }
});

server.listen(port, ip);

// To start this server, run:
//
//   node basic-server.js
//
// on the command line.
//
// To connect to the server, load http://127.0.0.1:3000 in your web
// browser.
