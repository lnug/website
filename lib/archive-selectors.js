'use strict'

var archive = require('../data/archive.json')
var Encoder = require('node-html-encoder').Encoder
var encoder = new Encoder('entity')

function eventSelectors (event) {
  var speakers = event.speakers.map(function (speaker) {
    // naughty.
    if (typeof speaker.video === 'string') {
      return '<li><a href="' + speaker.video + '" target = "_blank">' + encoder.htmlEncode(speaker.title) + '</a> - <a href="' + speaker.url + '">' + encoder.htmlEncode(speaker.name) + '</a> ' + '</li>'
    }
    return '<li>' + encoder.htmlEncode(speaker.title) + ' -  <a href="' + speaker.url + '">' + encoder.htmlEncode(speaker.name) + '</a> ' + '</li>'
  })
  return {
    '.date': event.date,
    '.lanyrd': event.lanyrd,
    '.speakers': speakers.join(' ')
  }
}

module.exports = function () {
  return archive.map(eventSelectors)
}
