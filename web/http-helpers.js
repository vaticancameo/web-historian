var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};

exports.respond = function(res, path, status) {
  status = status || 200;
  var data;
  // console.log(path.slice(1));
  if(path === '/'){
    path = archive.paths.loading;
    data = fs.readFileSync(path, 'utf8');
  } else if(archive.isUrlArchived(path.slice(1))){
    path = archive.paths.archivedSites + path;
    data = fs.readFileSync(path, 'utf8');
  } else {
    // path = archive.paths.loading;
    status = 404;


  }
  res.writeHead(status, headers);
  res.end(data);
};

exports.prepareResponse = function(req, cb) {
  //check is URL in list with helper method isURLinLIst
    //addURLtoList (add the url to sites.txt)
   // archive.addUrlToList(path.slice(1));
 

  var url = "";
  req.on('data', function(chunk) { 
    url += chunk.slice(4); });
  req.on('end', function() { cb(url); });
};

exports.send404 = function(res) {
  exports.respond(res, 'Not Found', 404);
};

exports.redirector = function(res, loc, status) {
  status = status || 302;
  res.writeHead(status, { Location: loc });
  res.end();
};
// As you progress, keep thinking about what helper functions you can put here!
