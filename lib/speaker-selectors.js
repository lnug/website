'use strict'

var thisMonth = require('../api/this-month.json')

function speakerSelectors (speaker) {
  return {
    '.name': speaker.name,
    '.title': speaker.title,
    '.desc': speaker.description,
    img: {
      src: speaker.img
    },
    '.lnug-twitterhandle a': {
      href: 'https://github.com/' + speaker.handle
    }
  }
}

module.exports = function (callback) {
  return thisMonth.map(speakerSelectors)
}
