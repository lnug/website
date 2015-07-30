#!/usr/bin/env node

'use strict';

var superagent = require('superagent');
var fs = require('fs');
var marked = require('marked');
var async = require('async');
var Moment = require('moment');

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
    speakerUrl: (talk.assignee) ? talk.assignee.url : talk.user.url,
    title: talk.title,
    description: marked(talk.body),
    milestone: talk.milestone.title
  };
}

function modelArchive(talk) {
  return {
    name: talk.name,
    url:  talk.link,
    title: talk.title
  };
}

/**
Nothing in here to strip out future events at the moment.

If its accepted, schedules and has a milestone it will appear in the archive
even if in the future.

**/
function archive(talks) {
  var old = require('../data/archive.json');
  var recentMonthsByMilestone = talks.reduce(function(dates, talk) {

    if (!dates[talk.milestone]) {
      dates[talk.milestone] = [];
    }
    dates[talk.milestone].push(modelArchive(talk));
    return dates;
  }, {});

  for (var milestone in recentMonthsByMilestone) {
    var m = new Moment();
    var month =  m.month(milestone.split(' ')[0]).month() + 1;
    var monthWithZero = ('0' + month).slice(-2);
    var date = monthWithZero + milestone.split(' ')[2];

    if (!old[date]) {
      old[date] = {};
    }
    old[date].date = milestone;
    old[date].speakers = recentMonthsByMilestone[milestone];

    // console.log('Updating ', milestone, '(' + date + ')');
    // console.log('with: ', JSON.stringify(old[date], null, 4));
  }

  fs.writeFile('./data/archive.json', JSON.stringify(old, null, 4), function(e) {
    console.log('Archive has been updated', e);
  });
};

console.log('Fetching data from https://api.github.com/repos/lnug/speakers/issues')
superagent.get('https://api.github.com/repos/lnug/speakers/issues')
  .end(function(error, data) {

    if (error) {
      error.message = 'Getting issues list failed' + error.message;
      throw error;
    }

    var acceptedTalks = data.body.filter(isReady).map(modelTalk);

    async.map(acceptedTalks, function(talk, next) {
      superagent
          .get(talk.speakerUrl)
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
