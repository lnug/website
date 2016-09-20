'use strict'
var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '1.10'

serviceWorker(spec, version)
