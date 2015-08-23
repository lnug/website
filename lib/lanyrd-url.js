var request = require('superagent');

/**
  given 'June 2015' converts it to a lanyrd url and confirms it exists.
**/
module.exports = function(date, callback) {
  var date = date.split(' ');;
  var lanyrd = 'http://lanyrd.com/' + date[1] + '/lnug-' + date[0] + '/';

  request.get(lanyrd).end(function(err, res) {
    if(res.ok) {
      callback(null, lanyrd);
    }else {
      console.log(lanyrd + ' - Not Found');
      callback(null, false);
    }
  });
};
