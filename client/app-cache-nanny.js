var appCacheNanny = require('appcache-nanny')
appCacheNanny.start()

appCacheNanny.on('updateready', function () {
  location.reload()
})
