#!/usr/bin/env node

'use strict';

var superagent = require('superagent');
var fs = require('fs');
var async = require('async');

var archive = require('../lib/archive');
var isReady = require('../lib/talk-is-ready');
var modelTalk = require('../lib/model-talk');
var getSpeakerDetails = require('../lib/recent-months-by-milestone');

console.log('Fetching data from https://api.github.com/repos/lnug/speakers/issues');
superagent
  .get('https://api.github.com/repos/lnug/speakers/issues')
  .end(function(error, data) {

    if (error) {
      error.message = 'Getting issues list failed' + error.message;
      throw error;
    }

    var acceptedTalks = data.body.filter(isReady).map(modelTalk);

    async.map(acceptedTalks, getSpeakerDetails, function(err, completeAcceptedTalks) {

      if (err) {
        throw err;
      }

      fs.writeFile('./data/this-month.json', JSON.stringify(completeAcceptedTalks, null, 4), function() {
        console.log('Data file has been updated');
      });

      archive(completeAcceptedTalks);
    });
  });
