'use strict'
var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '2.2'

serviceWorker(spec, version)
