'use strict';

var Moment = require('moment');
var fs = require('fs');

var archive = require('../data/archive.json');

var formatMilestone = require('../lib/format-milestone');
var getRecentMonthsByMilestone = require('../lib/recent-months-by-milestone');
var keyByEpoch = require('../lib/key-by-epoch');


module.exports = function(talks) {

  // Get the archive and convert to an object keyed by the epoch date so we can modify existing dates if needed.
  var old = keyByEpoch(archive);

  // create object of talks pulled in from github api keyed by the epoch of the
  // event so that we can add new talk to the right event and sort them.
  var recentMonthsByMilestone = getRecentMonthsByMilestone(talks);

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

  fs.writeFile('./data/archive.json', JSON.stringify(out, null, 4), function(e) {
    if(!e) {
      console.log('Archive has been updated');
    }
  });
};
