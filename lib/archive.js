'use strict';

var Moment = require('moment');
var fs = require('fs');

var formatMilestone = require('../lib/format-milestone');
var getRecentMonthsByMilestone = require('../lib/recent-months-by-milestone');
var keyByEpoch = require('../lib/key-by-epoch');

// Given the latest talks from the github api, add them to the right place in the archive.
module.exports = function(newTalks, archive) {

  // Get the archive and convert to an object keyed by the epoch date so we can modify existing dates if needed.
  var old = keyByEpoch(archive);

  // create object of talks pulled in from github api keyed by the epoch of the
  // event so that we can add new talk to the right event and sort them.
  var recentMonthsByMilestone = getRecentMonthsByMilestone(newTalks);

  for (var milestoneEpoch in recentMonthsByMilestone) {

    if (!old[milestoneEpoch]) {
      old[milestoneEpoch] = {};
    }
    old[milestoneEpoch].date = recentMonthsByMilestone[milestoneEpoch].dates.short;
    old[milestoneEpoch].speakers = recentMonthsByMilestone[milestoneEpoch].talks;
    console.log('------------------------------------------');
    console.log('Updating:');
    console.log(JSON.stringify(old[milestoneEpoch], null, 4));
    console.log('------------------------------------------');
  }
  // convert back to an array and sort it.
  var out = Object.keys(old).map(
    function (key) {
      return old[key];
    }
  ).sort(function(a, b) {
    return formatMilestone(a && a.date).epoch - formatMilestone(b && b.date).epoch;
  }).reverse();

  return out;
};
