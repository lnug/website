#!/usr/bin/env node

'use strict'

var generateMaps = require('../lib/generate-maps')
var venue = require('../data/venues/makers.json')

generateMaps(venue.location)
