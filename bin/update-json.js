#!/usr/bin/env node

'use strict'

var superagent = require('superagent')
var fs = require('fs')
var async = require('async')

var archive = require('../data/archive.json')

var nextEvent = require('../lib/next-event')
var makeArchive = require('../lib/archive')
var isReady = require('../lib/talk-is-ready')
var modelTalk = require('../lib/model-talk')
var getSpeakerDetails = require('../lib/get-speaker-detail')

console.log('Fetching data from https://api.github.com/repos/lnug/speakers/issues')
superagent
  .get('https://api.github.com/repos/lnug/speakers/issues')
  .end(function (error, data) {
    if (error) {
      error.message = 'Getting issues list failed' + error.message
      throw error
    }

    var readyTalks = data.body.filter(isReady)

    var nextEventDate = nextEvent(readyTalks)

    function isNextEvent (talk) {
      return (talk.milestone.title === nextEventDate)
    }

    var acceptedTalks = readyTalks.filter(isNextEvent).map(modelTalk)

    async.map(acceptedTalks, getSpeakerDetails, function (err, completeAcceptedTalks) {
      if (err) {
        throw err
      }

        completeAcceptedTalks.push({
          title: 'Talk at LNUG',
          name: 'Future speakers',
          description: '<h3>We are a friendly crowd and would love to hear you talk.</h3> You may never have spoken at a meetup before, or you may be a seasoned conference speaker... either way, you probably have a node.js story to tell.  <a href="/speak.html">Submit a talk proposal</a> and we can help you prepare.',
          img: '/images/favicon/favicon-128.png',
          speakerUrl: 'https://lnug.org/speak.html',
          milestone: completeAcceptedTalks[0].milestone
        })

      fs.writeFile('./data/this-month.json', JSON.stringify(completeAcceptedTalks, null, 4), function () {
        console.log('Data file has been updated')
      })

      var newArchive = makeArchive(completeAcceptedTalks, archive)

      fs.writeFile('./data/archive.json', JSON.stringify(newArchive, null, 4), function () {
        console.log('Archive file has been updated')
      })
    })
  })
