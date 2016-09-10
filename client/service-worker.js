'use strict'
var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '1.6'

serviceWorker(spec, version)
