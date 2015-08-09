#!/usr/bin/env node

'use strict';

var superagent = require('superagent');
var fs = require('fs');
var marked = require('marked');
var async = require('async');
var _ = require('lodash');

var archive = require('../lib/archive');
var formatMilestone = require('../lib/format-milestone');
var lanyrdUrl = require('../lib/lanyrd-url');


/**
    Returns true if talk (issues object from github api) is assigned and labelled as Accepted and Scheduled.
**/
function isReady(talk) {

  var isAccepted = talk.labels.filter(function(label) {
    return (label.name === 'Accepted & Scheduled');
  }).length;

  return (isAccepted);
}

function modelTalk(talk) {
  return {
    // if assigned return assigned url if not fall back to the creator.
    // this is used lated to fetch the name and avatar shown against the talk.
    apiSpeakerUrl: (talk.assignee) ? talk.assignee.url : talk.user.url,
    speakerUrl: (talk.assignee) ? talk.assignee.html_url : talk.user.html_url,
    title: talk.title,
    description: marked(talk.body),
    milestone: talk.milestone.title
  };
}

console.log('Fetching data from https://api.github.com/repos/lnug/speakers/issues')
superagent.get('https://api.github.com/repos/lnug/speakers/issues')
  .end(function(error, data) {

    var data = {
      body: require('../data/mock')
    }

    if (error) {
      error.message = 'Getting issues list failed' + error.message;
      throw error;
    }

    var acceptedTalks = data.body.filter(isReady).map(modelTalk);

// - can check for the event on lanyrd.
//     var acceptedDates = _.unique(acceptedTalks.map(function(i) {
//       return formatMilestone(i.milestone).short;
//     }));
//     acceptedDates.push('dsfdsf');
//     async.redudce(acceptedDates, lanyrdUrl, function(e, d) {
// console.log('d', d);
//     });


    async.map(acceptedTalks, function(talk, next) {

      superagent
          .get(talk.apiSpeakerUrl)
          .end(function(error, data) {
            if (error) {
              error.message = 'Getting  ' +
                talk.speakerUrl + ' failed: ' +
                error.message;
              throw error;
            }

            talk.img = data.body.avatar_url;
            talk.handle = data.body.login;
            talk.name  = data.body.name;
            next(null,  talk);
          });
    }, function(err, completeAcceptedTalks) {

      if (err) {
        throw err;
      }

      fs.writeFile('./data/this-month.json', JSON.stringify(completeAcceptedTalks, null, 4), function() {
        console.log('Data file has been updated');
      });

      archive(completeAcceptedTalks);
    });
  });
