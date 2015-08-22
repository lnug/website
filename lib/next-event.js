/**

  Returns the dates of the next meetup based on contents of this-month.json
  Throw error if talk milestones in next-month are not the same
**/

var data = require('../data/this-month.json');


module.exports = function() {

  var date = null;
  data.forEach(function(item) {
    if (date != null && date != item.milestone) {
      // all the dates in this month should be the same, just a final check incase anything strange has happened in the github issues.
      throw new Error('Different dates specified in JSON. HTML has not been generated. Please check milestone fields in ./data/this-month.js');
    }
    date = item.milestone;
  });

  return date;
}
