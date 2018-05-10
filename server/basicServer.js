/* Import node's http module: */
const http = require('http');
const messages = require('./request-handler');
const utils = require('./utils');
const url = require('url');

const port = 3003;
const ip = '127.0.0.1';

const router = {
  '/classes/messages': messages.requestHandler,
  '/restaurants/': () => 0,
  // ...
};

const server = http.createServer((req, res) => {
  const route = router[url.parse(req.url).pathname];
  if (route) {
    route(req, res);
  } else {
    utils.sendResponse(res, '', 404);
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
