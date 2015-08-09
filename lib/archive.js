/**
Nothing in here to strip out future events at the moment.

If its accepted, schedules and has a milestone it will appear in the archive
even if in the future.

**/

var Moment = require('moment');
var fs = require('fs');


var formatMilestone = require('../lib/format-milestone');

module.exports = function(talks) {

  // Get the archive and convert to an object keyed by the epoch date so we can modify existing dates if needed.
  var old = require('../data/archive.json').reduce(function(archiveDates, date) {
    archiveDates[formatMilestone(date.date).epoch] = date;
    return archiveDates;
  }, {});

  // create object of talks pulled in from github api keyed by the epoch of the
  // event so that we can add new talk to the right event and sort them.
  var recentMonthsByMilestone = talks.reduce(function(dates, talk) {

    var formattedDates;

    // not entirely sure this check is still necessary.
    if (talk.date) {
      formattedDates = formatMilestone(talk.date);
    } else {
      formattedDates = formatMilestone(talk.milestone);
    }

    var key = formattedDates.epoch;

    if (!dates[key]) {
      dates[key] = {
        dates:formattedDates,
        talks: []
      };
    }
    // what if the talk has already been added here?
    dates[key].talks.push(modelArchive(talk));
    return dates;
  }, {});

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

function modelArchive(talk) {
  return {
    name: talk.name,
    url:  talk.speakerUrl,
    title: talk.title
  };
}
