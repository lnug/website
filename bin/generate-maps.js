#!/usr/bin/env node

'use strict'

var generateMaps = require('../lib/generate-maps')
var venue = require('../data/venues/unknown.json')

generateMaps(venue.location)
