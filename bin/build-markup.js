#!/usr/bin/env node

'use strict'

var speclate = require('speclate')
var spec = require('../spec')

speclate.site.markup(spec, function (error) {
  if (error) {
    console.log('Error generating site: ', error)
  }
})

// moves static files into /docs dir
speclate.site.files(spec, function () {
  console.log('moved files')
})

speclate.site.api(spec, function () {
  console.log('generated api')
})
