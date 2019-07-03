'use strict'
var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '03.07.2019'

serviceWorker(spec, version)
