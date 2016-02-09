'use strict'

var imageData = require('../data/image-gallery.json')
var Encoder = require('node-html-encoder').Encoder
var encoder = new Encoder('entity')

function imageSelectors(imageObj) {
    // var speakers = event.speakers.map(function (speaker) {
    //   // naughty.
    //   if (typeof speaker.video === 'string') {
    //     return '<li><a href="' + speaker.video + '" target = "_blank">' + encoder.htmlEncode(speaker.title) + '</a> - <a href="' + speaker.url + '">' + encoder.htmlEncode(speaker.name) + '</a> ' + '</li>'
    //   }
    //   return '<li>' + encoder.htmlEncode(speaker.title) + ' -  <a href="' + speaker.url + '">' + encoder.htmlEncode(speaker.name) + '</a> ' + '</li>'
    // })
    return {
        '.source': imageObj.source,
        'img': {
            src: imageObj.url
        },
        // '.url': imageObj.url,
        '.description': imageObj.description,
        '.author': imageObj.author,
        '.date': imageObj.date
    }
}

module.exports = function(callback) {
    var images = imageData.images.map(imageSelectors)
    callback(null, images)
    return images
}
