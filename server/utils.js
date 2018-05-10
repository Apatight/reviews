const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

exports.sendResponse = (response, data, statusCode) => {
  const status = statusCode || 200;
  response.writeHead(status, headers);
  response.end(JSON.stringify(data));
};

exports.collectData = (request, callback) => {
  let data = '';
  request.on('data', (chunk) => {
    data += chunk;
  });
  request.on('end', () => {
    callback(JSON.parse(data));
  });
};

exports.makeActionHandler = actionMap => (request, response) => {
  const action = actionMap[request.method];
  if (action) {
    action(request, response);
  } else {
    exports.sendResponse(response, '', 404);
  }
};
