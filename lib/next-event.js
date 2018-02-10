var moment = require('moment')

var now = moment();

function isDateInFuture (date) {
  return date.isAfter(now)
}

function getDate (talk) {
  return moment(talk.milestone.title, 'MMMM Do YYYY')
}

function nearestDate (a, b) {
  if (a && !b) {
    return a
  } else {
    if (a.isBefore(b)) {
      return a
    } else {
      return b
    }
  }
}

function getFutureEvents (talks, except) {
  var futureEvents = talks.map(getDate).filter(isDateInFuture)
  if (typeof except !== "undefined") {
    futureEvents.splice(futureEvents.indexOf(except), 1);
  }
  return futureEvents;
}

function getNextEvent (talks) {
  var futureEvents = getFutureEvents(talks);
  if (!futureEvents.length) {
    return
  }
  return futureEvents.reduce(nearestDate)
}

module.exports = function (talks) {
  var nextEventDt = getNextEvent(talks)
  if (!nextEventDt) {
    return
  }
  return nextEventDt.format('MMMM Do YYYY')
}

module.exports.futureEvents = getFutureEvents;
