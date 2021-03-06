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

    var future = nextEvent.futureEvents(readyTalks, nextEventDate).map(function (date) {
      return date.format('MMMM Do YYYY')
    })

    function isNextEvent (talk) {
      return (talk.milestone.title === nextEventDate)
    }

    function isFutureEvent (talk) {
      return (future.indexOf(talk.milestone.title) !== -1)
    }

    var acceptedTalks = readyTalks.filter(isNextEvent).map(modelTalk)

    var futureTalks = readyTalks.filter(isFutureEvent).map(modelTalk)

    async.map(acceptedTalks, getSpeakerDetails, function (err, completeAcceptedTalks) {
      if (err) {
        throw err
      }

      if (!completeAcceptedTalks.length) {
        return
      }

      while (completeAcceptedTalks.length < 2) {
        completeAcceptedTalks.push({
          title: 'Slot available',
          name: 'Submit your talk!',
          description: 'This slot is still available, help us out: <a href="/speak.html">Submit a talk proposal</a>.',
          img: '/images/favicon/favicon-128.png',
          speakerUrl: 'https://lnug.org/speak.html',
          milestone: completeAcceptedTalks[0].milestone
        })
      }
      fs.writeFile('./data/this-month.json', JSON.stringify(completeAcceptedTalks, null, 4), function () {
        console.log('Data file has been updated')
      })

      var newArchive = makeArchive(completeAcceptedTalks, archive)

      fs.writeFile('./data/archive.json', JSON.stringify(newArchive, null, 4), function () {
        console.log('Archive file has been updated')
      })
    })

    async.map(futureTalks, getSpeakerDetails, function (err, completeAcceptedTalks) {
      if (err) {
        throw err
      }

      if (!completeAcceptedTalks.length) {
        return
      }

      var nextMonths = makeArchive(completeAcceptedTalks, [])

      fs.writeFile('./data/next-months.json', JSON.stringify(nextMonths, null, 4), function () {
        console.log('Future data file has been updated')
      })
    })
  })
