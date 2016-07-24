
window.spec = require('../spec')
var router = require('speclate-router')


    window.pageRender = require('speclate-router/page-render')
var appCacheNanny = require('appcache-nanny')
var analytics = require('ga-browser')(window)

window.$ = require('jquery')
router(spec, {
  before: function () {
    $('nav a.active, footer a.active').removeClass('active')
    $('#container').addClass('hide');
         $('html,body').animate({ scrollTop: 0 }, 400);

  },
  after: function () {
    //$('html,body').scrollTop($('#container'))

     setTimeout(function() {
        $('#container').removeClass('hide');
    }, 100);
    analytics('send', 'pageview', {
      page: window.location.pathname,
      title: document.title
    })
  },
  error: function (err) {
    if (err) {
      location.reload()
    }
  }
})

analytics('create', 'UA-2845245-14', 'auto')
analytics('send', 'pageview')

appCacheNanny.start()
appCacheNanny.on('updateready', function (a, b, c) {
    // get latest spec


//    var page = (window.location.pathname === '/') ? '/index.html' : window.location.pathname

    pageRender(spec[window.location.pathname], {});
    // $('#notice').addClass('on');
    // var duration = 30000;
    // var refreshTime = Date.now() + duration
    // var refreshIntervalId = setInterval(function() {
    //     var remaining = refreshTime  -  Date.now() ;
    //     $('#notice .countdown').html( Math.ceil(remaining / 1000))
    // }, 1000);


    // var hideDuration = 1000;
    // setTimeout(function() {
    //     clearInterval(refreshIntervalId);

    //     $('#notice').addClass('hide');

    //     setTimeout(function() {
    //         location.reload();
    //     }, hideDuration)

    // }, duration - hideDuration);


    // var refreshTime = Date.now() + 30000
    // setInterval(function() {
    //     var remaining = Math.ceil( (refreshTime -  Date.now() )  );
    //     $('#notice .countdown').html(remaining / 1000)
    // }, 1000);
})
