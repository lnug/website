'use strict'

var Encoder = require('node-html-encoder').Encoder
var encoder = new Encoder('entity')

module.exports = function eventSelectors (event) {
  if (!event.speakers) {
    event.speakers = []
  }
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
