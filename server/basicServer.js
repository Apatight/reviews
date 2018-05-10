/* Import node's http module: */
const http = require('http');
const messages = require('./request-handler');
const utils = require('./utils');
const url = require('url');

const port = 3003;
const ip = '127.0.0.1';

const router = {
  '/restaurants/*/reviews': () => 0,
  '/restuarants/*': () => 1,
};

const matchRuleShort = (str, rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(str);

const server = http.createServer((req, res) => {
  for (let i = 0; i < Object.keys(router).length; i += 1) {
    if(matchRuleShort(url.parse(req.url).pathname), router[Object.keys(router)[i]]) {
      route = 
    }
  }
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
