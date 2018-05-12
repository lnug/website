
var setupAnalytics = require('get-google-tracking-analytics')
setupAnalytics()

var router = require('speclate-router')
var appCacheNanny = require('appcache-nanny')

window.$ = require('jquery')
router({
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    $('html,body').scrollTop($('#container'))
    ga('send', 'pageview', {
      page: window.location.pathname,
      title: document.title
    })
  },
  error: function (err, $container) {
    if (err) {
      $('nav a.active').removeClass('active')
      $container.html('<div class="markdown"><h1>Error</h1><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>')
    }
  }
})

ga('create', 'UA-2845245-14', 'auto')
ga('send', 'pageview')

var newVersionAvailable = function (newWorker) {
  $('header').append('<div class="new-version">There is a new version of the LNUG site avaialble.<a href="/">upgrade now</a></div>')
  $('header div.new-version a').on('click', { newWorker: newWorker }, (event) => {
    event.data.newWorker.postMessage({ action: 'skipWaiting' })
    $('header div.new-version').remove()
  })
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope)

    var newWorker
    // now we need to detect updates.
    registration.addEventListener('updatefound', function () {
      // An updated service worker has appeared in reg.installing!
      newWorker = registration.installing
      newWorker.addEventListener('statechange', function () {
        console.log('nws', newWorker.state)
        // Has service worker state changed?
        switch (newWorker.state) {
          case 'installed':

            // There is a new service worker available, show the notification
            if (navigator.serviceWorker.controller) {
              newVersionAvailable(newWorker);
            }
            break
        }
      })
    })
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
