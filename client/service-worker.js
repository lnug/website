'use strict'

var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')

var extraFiles = [
  '/',
  'css.css',
  '/service-worker.js',
  'client/index-compiled.js',
  'images/lnug-logo-monochrome.svg',
  'images/lnug-logo.svg',
  'images/maps/thin.png',
  'images/maps/wide.png',
  'images/favicon/favicon-16x16.png',
  'images/favicon/favicon-128.png'
    //'client/spec-compiled.js'
]


serviceWorker(spec, extraFiles)
