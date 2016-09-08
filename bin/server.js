#!/usr/bin/env node

var PORT = 5001

var serveMe = require('serve-me')({
  debug: true,
  directory: './docs'
})

serveMe.start(PORT)
console.log('http://127.0.0.1:' + PORT)
