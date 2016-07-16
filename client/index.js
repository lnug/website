var spec = require('../spec')
var router = require('speclate-router')
var appCacheNanny = require('appcache-nanny')
var analytics = require('ga-browser')()

window.$ = require('jquery')

router(spec, {
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    $('body').scrollTop($('#container'))
  }
})

analytics('create', 'UA-2845245-14', 'auto')
analytics('send', 'pageview')

appCacheNanny.start()
appCacheNanny.on('updateready', function (a, b, c) {
  location.reload()
})
