#!/usr/bin/env node

'use strict';

/**
 * Adds speaker details to the index page.
 */

var sizlate = require('sizlate');
var fs = require('fs');
var data = require('../data/archive.json');

var indexTemplate = fs.readFileSync('./templates/index.html', 'utf8');
var archiveTemplate = fs.readFileSync('./templates/archive.html', 'utf8');

/**
 * Turns speaker object into selector object to be used by sizlate.
 * @param  {Object} speaker Speaker take from ./js/data.json
 * @return {Object}         Sizlate selector object.
 */
function speakerSelectors(speaker) {
  return {
    'a': {
      innerHTML: speaker.name,
      href: speaker.url
    },
    'span': ' - ' + speaker.title
  };
}

var dates = [];
Object.keys(data).reverse().forEach(function(key) {
  dates.push('<dl><dt>', data[key].date, '</dt>');

  data[key].speakers.forEach(function(speaker) {
    var selectors = speakerSelectors(speaker);
    dates.push(sizlate.doRender(archiveTemplate, selectors));

  });

  dates.push('</dl>');
});

var out = sizlate.doRender(indexTemplate, {
  '.lnug-content': {
    innerHTML: dates.join(' '),
    className: 'lnug-archive'
  },
  '.text-center.talk-label': 'Archive'
});

fs.writeFileSync('./archive.html', out, 'utf8');