var spec = require('../spec')
var speclateRouter = require('speclate-router')
var appCacheNanny = require('appcache-nanny')
window.$ = require('jquery')

speclateRouter(spec, {
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    $('html,body').scrollTop($('#container'))
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview')
  },
  error: function (err) {
    if (err) {
      location.reload()
    }
  }
})



appCacheNanny.start()
appCacheNanny.on('updateready', function (a, b, c) {
  location.reload()
})
