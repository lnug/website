#!/usr/bin/env node
'use strict'

var gallery = require('../data/gallery.json')
var superagent = require('superagent')
var shortid = require('shortid')
var fs = require('fs')
var im = require('imagemagick-stream')

gallery.map(function (photo) {
  if (!photo.thumb) {
    console.log('Fetching thumbnail for ', photo.source)
    var fetchStream = superagent.get(photo.source)
    var id = shortid.generate()
    var thumbnailPath = './images/gallery/' + id + '.jpg'
    var writeStream = fs.createWriteStream(thumbnailPath)
    var resize = im().resize('500x500').crop('350x350').quality(90)
    fetchStream.pipe(resize).pipe(writeStream)
    photo.thumb = thumbnailPath
  }
  return photo
})

var galleryString = JSON.stringify(gallery, null, 2)

fs.writeFile('./data/gallery.json', galleryString, function (error, data) {
  if (error) {
    console.log('Error updating gallery.json', error)
  } else {
    console.log('Updated gallery.json')
  }
})
