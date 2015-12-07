/**
  Takes the label from the github issues and converts it to an epoch date for storing/sorting
**/

var Moment = require('moment')

/**
  Takes the date provided by the github milestone (July 2015 or July 23rd 2015)
  and returns an object including epoch and short form date.
**/
module.exports = function (milestone) {
  var milestoneArr = milestone.split(' ')
  var milestoneMonth = milestoneArr[0]
  var milestoneYear

  // allows date to be passed in without the day.
  if (milestoneArr.length === 3) {
    milestoneYear = milestoneArr[2]
  } else if (milestoneArr.length === 2) {
    milestoneYear = milestoneArr[1]
  }

  var m = new Moment()
  var month = m.month(milestoneMonth).month() + 1
  var epoch = new Moment(milestoneYear + ' ' + month, 'YYYY MM').unix()

  return {
    epoch: epoch,
    short: milestoneMonth + ' ' + milestoneYear,
    full: milestone
  }
}
