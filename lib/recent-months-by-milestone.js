var formatMilestone = require('./format-milestone');

// create object of talks pulled in from github api keyed by the epoch of the
// event so that we can add new talk to the right event and sort them.
module.exports = function(talks) {
  return talks.reduce(function(dates, talk) {

    var formattedDates = formatMilestone(talk.milestone);

    var key = formattedDates.epoch;

    if (!dates[key]) {
      dates[key] = {
        dates:formattedDates,
        talks: []
      };
    }
    dates[key].talks.push(modelArchive(talk));
    return dates;
  }, {});
};

function modelArchive(talk) {
  return {
    name: talk.name,
    url:  talk.speakerUrl,
    title: talk.title
  };
}
