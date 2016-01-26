var async = require('async')
var superagent = require('superagent')
var fs = require('fs')

var mapUrl = function (location, pointer) {
  var pointerPosition = ''
  if (location.long && location.lat && location.scale) {
    pointerPosition = 'pin-m+BED52E(' + location.long + ',' + location.lat + ',' + location.scale + ')/'
  }

  var url = 'https://api.mapbox.com/v4/mapbox.emerald/' + pointerPosition + pointer.long + ',' + pointer.lat + ',' + pointer.scale + '/' + pointer.size + '?access_token=pk.eyJ1Ijoic2ltb25tY21hbnVzIiwiYSI6ImNpZ2F3bW1rbzAzY2p2bW03aXh1anNkZWoifQ.M5Uvijsj8Qu_ABggsM6ZAA'
  return url
}
module.exports = function (location, callback) {
  async.parallel({
    thinMap: function (next) {
      superagent.get(mapUrl(location, location.thin), function (err, img) {
        if (err) {
          console.log('Error getting map image.')
        }
        fs.writeFile('./images/maps/thin.png', img.body, next)
      })
    },
    wideMap: function (next) {
      superagent.get(mapUrl(location, location.wide), function (err, img) {
        if (err) {
          console.log('Error getting map image.')
        }

        fs.writeFile('./images/maps/wide.png', img.body, next)
      })
    }
  }, callback)
}
