'use strict'

var fs = require('fs')

function getImages (callback) {
  fs.readdir('./images/gallery', function (err, items) {
    if (err) throw err
    var images = items.map(imageSelectors)
    images = images.filter(function (val) {
      return val !== null
    })
    callback(null, images)
  })
}

function imageSelectors (imageObj) {
  if (fs.lstatSync('./images/gallery/' + imageObj).isDirectory()) return null
  return {
    'a': {
      'href': '/images/gallery/' + imageObj
    },
    'img': {
      'src': '/images/gallery/thumbs/' + imageObj
    }
  }
}

module.exports = function (callback) {
  getImages(callback)
}
