'use strict'

var items = require('../data/gallery.json')

function imageSelectors (imageObj) {
  // check thumbnail exists
  // check original is still there.
  return {
    'a': {
      'href': imageObj.source
    },
    'img': {
      'src': imageObj.thumb,
      alt: 'Picture from an LNUG event'
    }
  }
}

module.exports = function () {
  return items.map(imageSelectors)
}
