'use strict'

var imageData = require('../data/gallery.json')

function imageSelectors (imageObj) {
  return {
    'a': {
      'href': imageObj.source
    },
    'img': {
      'src': imageObj.thumb
    }
  }
}

module.exports = function (callback) {
  var images = imageData.map(imageSelectors)
  callback(null, images)
  return images
}
