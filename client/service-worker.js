'use strict'
var serviceWorker = require('speclate-service-worker')
var offlineFiles = require('./offline-spec')
var version = '08-01.07.2019'

serviceWorker(offlineFiles, version)
