'use strict'
var serviceWorker = require('speclate-service-worker')
var offlineFiles = require('../offline-spec')
var version = '03.07.2019'

serviceWorker(offlineFiles, version)
