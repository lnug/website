#!/usr/bin/env node
'use strict'

var easyimage = require('easyimage')
var fs = require('fs')

fs.readdir('./images/gallery', function (err, items) {
  if (err) throw err

  for (var i = 0; i < items.length; i++) {
    if (!fs.lstatSync('./images/gallery/' + items[i]).isDirectory()) {
      easyimage.rescrop({
        src: './images/gallery/' + items[i],
        dst: './images/gallery/thumbs/' + items[i],
        width: 500,
        height: 500,
        cropwidth: 350,
        cropheight: 350,
        x: 0,
        y: 0
      }).then(
        function (image) {
          console.log('Resized and cropped: ' + image.width + ' x ' + image.height)
        },
        function (err) {
          console.log(err)
        }
      )
    }
  }
})
