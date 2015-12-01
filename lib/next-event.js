var isReady = require('./talk-is-ready');

var moment = require('moment');

function isDateInFuture(date) {
  return date.isAfter();
}

function getDate(talk) {
  return moment(talk.milestone.title, 'MMMM Do YYYY');
}

function nearestDate(a, b) {
  if(a && !b) {
    return a;
  }else {
    if(a.isBefore(b)) {
      return a;
    }else {
      return b;
    }
  }
}

function getNextEvent(talks) {
  var futureEvents = talks.map(getDate).filter(isDateInFuture);
  return futureEvents.reduce(nearestDate);
}

module.exports = function(talks) {
  return getNextEvent(talks).format('MMMM Do YYYY');
};
