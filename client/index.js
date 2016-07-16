var spec = require('../spec');
var router = require('speclate-router');
var appCacheNanny = require('appcache-nanny');

window.$ = require('jquery');

router(spec, {
  before: function() {
    $('nav a.active').removeClass('active')

  },
  after: function() {
      $('body').scrollTop($('#container'))
  }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-2845245-14', 'auto');
ga('send', 'pageview');

appCacheNanny.start();
appCacheNanny.on('updateready', function(a, b, c) {
  location.reload();
});
