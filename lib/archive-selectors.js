'use strict'

var archive = require('../data/archive.json')
var eventSelectors = require('./event-selectors')

module.exports = function () {
  return archive.map(eventSelectors)
}
