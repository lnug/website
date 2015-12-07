var nextEvent = require('./next-event-from-file')

module.exports = function () {
  var nextEventDate = nextEvent()
  return 'https://ti.to/lnug/' + nextEventDate.split(' ')[0].toLowerCase() + '-' + nextEventDate.split(' ')[2]
}
