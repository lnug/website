#!/usr/bin/env node

'use strict'

var speclate = require('speclate')
var spec = require('../spec')
speclate.site.markup(spec, function (error) {
  if (error) {
    console.log('Error generating site: ', error)
  }
})

speclate.site.appCache(spec, [
  '/css.css',
  '/app-cache-nanny.js',
  '/',
  '/images/lnug-logo.svg',
  '/images/maps/thin.png',
  '/images/maps/wide.png'
])
