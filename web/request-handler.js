var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

var actions = {
  'GET': function(req, res) {
    httpHelpers.respond(res, req.url);
  },

  'POST': function(req, res) {

    httpHelpers.prepareResponse(req, archive.addUrlToList);
    // httpHelpers.prepareResponse(req, function(data) {
  
 
    httpHelpers.redirector(res, req.url);
    // });
    
  },

  'OPTIONS': function(req, res) {
    // TODO: call sendResponse
    httpHelpers.respond(res, req.url);
  }
};

exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  action(req, res);
  // res.end();

};
