#!/usr/bin/env node
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var archive = require('../helpers/archive-helpers');
// iterate over sites.txt
// if site !archived then archive it
var urls;
archive.readListOfUrls(function(x){
  // console.log(x);
  urls = x;
});
  // console.log(urls);
urls = urls.slice(0,urls.length - 1);
urls.forEach(function(url){
  if(!archive.isUrlArchived(url)){
    // archive it
    archive.downloadUrls(url);
  }
});
console.log('I ran via cron!');