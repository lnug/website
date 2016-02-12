 'use strict'

 var fs = require('fs')
 var Encoder = require('node-html-encoder').Encoder
 var encoder = new Encoder('entity')


 function getImages(callback) {
     fs.readdir('./images/gallery', function(err, items) {
         if (err) throw err;
         var images = items.map(imageSelectors);
         callback(null, images)
     });
 }

 function imageSelectors(imageObj) {
     return {
         'a': {
             'href': '/images/gallery/' + imageObj
         },
         'img': {
             'data-original': '/images/gallery/' + imageObj
         }
     }
 }


 module.exports = function(callback) {
     getImages(callback);

 }

