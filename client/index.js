var slideNav = require('../components/slide-nav/slide-nav')


/* eslint-disable */

// just a hack because the analytics stopped working, this should be moved back to a module.
var analytics = function () {};
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','analytics');
/* eslint-enable */

var router = require('speclate-router')
var appCacheNanny = require('appcache-nanny')

window.$ = require('jquery')
router({
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {

    if (window.location.pathname.slice(0, 7) !== '/slides') {
      $('html,body').scrollTop($('#container'))
    }
    analytics('send', 'pageview', {
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

analytics('create', 'UA-2845245-14', 'auto')
analytics('send', 'pageview')

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

$(document).ready(function() {
  slideNav();
});
