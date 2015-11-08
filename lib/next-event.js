var isReady = require('../lib/talk-is-ready');

var moment = require('moment');

function nextEvent(talks) {

    var futureEvents = talks.map(function(talk) {
        var date = moment(talk.milestone.title, 'MMMM Do YYYY');
        if(date.isAfter()) {  // milestone is in the future.
            return date;
        }
    });

    var nextDate = futureEvents.reduce(function(a, b) {
        if(a && !b) {
            return a;
        }else {
            if(a.isBefore(b)) {
                return a;
            }else {
                return b;
            }
        }
    });
    return nextDate;
}


module.exports = function(talks) {
    return nextEvent(talks).format('MMMM Do YYYY');
};
