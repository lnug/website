var formatMilestone = require('./format-milestone');

// Given the archive array and convert to an object keyed by the epoch date so we can modify existing dates if needed.
module.exports = function(archive) {
  return archive.reduce(function(archiveDates, date) {
    archiveDates[formatMilestone(date.date).epoch] = date;
    return archiveDates;
  }, {});
};
