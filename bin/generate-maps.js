#!/usr/bin/env node

'use strict'

var generateMaps = require('../lib/generate-maps')
var venue = require('../data/venues/beamery.json')

generateMaps(venue.location)
