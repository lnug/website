#!/usr/bin/env node

'use strict';

/**
 * Adds speaker details to the index page.
 */

var sizlate = require('sizlate');
var fs = require('fs');
var data = require('../data/this-month.json');
var nextEvent = require('../lib/next-event');




var indexTemplate = fs.readFileSync('./templates/index.html', 'utf8');
var speakerTemplate = fs.readFileSync('./templates/speaker.html', 'utf8');

/**
 * Turns speaker object into selector object to be used by sizlate.
 * @param  {Object} speaker Speaker take from ./js/data.json
 * @return {Object}         Sizlate selector object.
 */
function speakerSelectors(speaker) {
  return {
    '.name': speaker.name,
    '.title': speaker.title,
    '.desc': speaker.description,
    img: {
      src: speaker.img
    },
    '.lnug-twitterhandle a': {
      innerHTML: '@' + speaker.handle,
      href: 'https://github.com/' + speaker.handle
    }
  };
}

var speakers = data.map(function(speaker) {
  var selectors = speakerSelectors(speaker);
  return sizlate.doRender(speakerTemplate, selectors);
});

var out = sizlate.doRender(indexTemplate, {
  '.lnug-nextmeetup': nextEvent(),
  '.lnug-content': speakers.join(' ')
});

fs.writeFileSync('./index.html', out, 'utf8');
