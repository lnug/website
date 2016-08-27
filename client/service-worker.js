'use strict'

var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '1.3'
console.log('version is', version);
var extraFiles = [
  '/',
  'css.css',
  'client/index-compiled.js',
  'client/spec.json',
  'images/lnug-logo-monochrome.svg',
  'images/lnug-logo.svg',
  'images/maps/thin.png',
  'images/maps/wide.png',
  'images/favicon/favicon-16x16.png',
  'images/favicon/favicon-128.png'
]


serviceWorker(spec, extraFiles)
