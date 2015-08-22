/**
  Takes the label from the github issues and converts it to an epoch date for storing/sorting
**/

var Moment = require('moment');

/**
  Takes the date provided by the github milestone (July 2015 or July 23rd 2015)
  and returns an object including epoch and short form date.
**/
module.exports = function(milestone) {

  var milestoneArr = milestone.split(' ');
  var milestoneMonth = milestoneArr[0];

  // allows date to be passed in without the day.
  if(milestoneArr.length === 3) {
    var milestoneDay = milestoneArr[1];
    var milestoneYear = milestoneArr[2];
    var milestoneDay = milestoneArr[1].substring(0, 2);
    var milestoneDayFormat = ' DD ';

  } else if(milestoneArr.length === 2) {
    var milestoneYear = milestoneArr[1];
    var milestoneDayFormat = ' DD';
    var milestoneDay = '';
  }

  var m = new Moment();
  var month = m.month(milestoneMonth).month() + 1;
  var date = milestoneYear + milestoneDay + month;
  var epoch = new Moment(milestoneYear + ' ' + month , 'YYYY MM').unix();

  return {
    epoch: epoch,
    short: milestoneMonth + ' ' + milestoneYear,
    full: milestone
  }

}
