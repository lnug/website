
var setupAnalytics = require('get-google-tracking-analytics')
setupAnalytics()

var router = require('../node_modules/speclate/router/index.js')

var appCacheNanny = require('appcache-nanny')

router({
  before: function () {
    var activeItem = document.querySelector('nav a.active')
    if (activeItem) {
      activeItem.classList.remove('active')
    }
  },
  after: function () {
    document.querySelector('html,body').scroll({ top: 0 })
    ga('send', 'pageview', {
      page: window.location.pathname,
      title: document.title
    })
  },
  error: function (err, $container) {
    if (err) {
      var activeItem = document.querySelector('nav a.active')
      if (activeItem) {
        activeItem.classList.remove('active')
      }
      $container.innerHTML = '<div class="markdown"><h1>Error</h1><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>'
    }
  }
})

ga('create', 'UA-2845245-14', 'auto')
ga('send', 'pageview')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope)
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
