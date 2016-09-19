

var router = require('speclate-router')
var analytics = require('ga-browser')(window)
var appCacheNanny = require('appcache-nanny')

window.$ = require('jquery')

router({
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    $('html,body').scrollTop($('#container'))
    analytics('send', 'pageview', {
      page: window.location.pathname,
      title: document.title
    })
  },
  error: function (err, $container) {
    if (err) {
      $('nav a.active').removeClass('active')
      console.log(err)
      $container.html('<div class="markdown"><h1>Error</h1><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>')
    }
  }
})

analytics('create', 'UA-2845245-14', 'auto')
analytics('send', 'pageview')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
//    console.log('ServiceWorker registration successful with scope: ', registration.scope)
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err)
  })
 } else {
  appCacheNanny.start()
}

appCacheNanny.on('updateready', function () {
  location.reload()
})