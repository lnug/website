'use strict'
var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '2.1'

serviceWorker(spec, version)
