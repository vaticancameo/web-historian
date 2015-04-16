var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt'),
  'index' : path.join(__dirname, '../web/public/index.html'),
  'loading' : path.join(__dirname, '../web/public/loading.html')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
exports.archive = function() {

};

exports.readListOfUrls = function(){
};

exports.isUrlInList = function(){
  // check for url presence in sites.txt

};

exports.addUrlToList = function(url){
  fs.appendFileSync(exports.paths.list, url + '\n');
};

exports.isUrlArchived = function(url){
  var sites = fs.readdirSync('archives/sites');
  return _.contains(sites, url);
  // check for html in /sites
  // if not there serve loading file (in respond in http helpers)
};

exports.downloadUrls = function(){
};
