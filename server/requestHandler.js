var utils = require('./utils');

const actions = {
  'GET': (request, response) => {

  },
  'POST': (request, response) => {

  },
  'OPTIONS': (request, response) => {
  }
};

exports.requestHandler = utils.makeActionHandler(actions);