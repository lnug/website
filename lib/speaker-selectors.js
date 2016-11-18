'use strict'

var thisMonth = require('../data/this-month.json')

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
var sortByTitle = function(a, b) {
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
}

module.exports = function (callback) {
  return thisMonth.sort(sortByTitle).map(speakerSelectors)
}
