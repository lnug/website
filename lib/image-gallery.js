'use strict'

var fs = require('fs')
var items = require('../api/gallery.json');

function imageSelectors (imageObj) {

  // check thumbnail exists
  // check original is still there. 
  return {
    'a': {
      'href': imageObj.source
    },
    'img': {
      'src': '/images/gallery/thumbs/' + imageObj.thumbnail
    }
  }
}

module.exports = function (callback) {
  var images = items.map(imageSelectors)
  callback(null, images)
}
