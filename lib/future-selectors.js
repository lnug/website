'use strict'

var futureEvents = require('../data/next-months.json')
var eventSelectors = require('./event-selectors')

module.exports = function () {
  return futureEvents.map(eventSelectors).reverse()
}
