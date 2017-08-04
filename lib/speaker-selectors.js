'use strict'

var thisMonth = require('../data/this-month.json')

function speakerSelectors (speaker) {
  var speakerUrl
  var speakerID

  if (speaker.speakerUrl) {
    speakerUrl = speaker.speakerUrl
  } else {
    speakerUrl = 'https://github.com/' + speaker.handle
  }

  if(speaker.name){
    speakerID = speaker.name
  } else {
    speakerID = speaker.handle
  }

  return {
    '.name': speakerID,
    '.title': speaker.title,
    '.desc': speaker.description,
    img: {
      src: speaker.img
    },
    '.lnug-twitterhandle a': {
      href: speakerUrl
    }
  }
}
var sortByTitle = function (a, b) {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

module.exports = function (callback) {
  return thisMonth.sort(sortByTitle).map(speakerSelectors)
}
