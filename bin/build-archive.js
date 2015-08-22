#!/usr/bin/env node

'use strict';

/**
 * Adds speaker details to the index page.
 */

var sizlate = require('sizlate');
var fs = require('fs');
var data = require('../data/archive.json');
var nextEvent = require('../lib/next-event');

var async = require('async');

var lanyrdUrl = require('../lib/lanyrd-url');

var indexTemplate = fs.readFileSync('./templates/index.html', 'utf8');
var archiveTemplate = fs.readFileSync('./templates/archive.html', 'utf8');

var Encoder = require('node-html-encoder').Encoder;
var encoder = new Encoder('entity');
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
    'span': (' - ' + encoder.htmlEncode(speaker.title))
  };
}

var markup = [];

data.forEach(function(lnug) {
  // todo: this should be done with sizlate
  markup.push('<dl><dt>', lnug.date);

  if (lnug.lanyrd) {
    markup.push(" - <a href='" + lnug.lanyrd + "'  target='_blank'>Lanyrd</a>");
  }

  markup.push('</dt>');
  lnug.speakers.forEach(function(speaker) {
    var selectors = speakerSelectors(speaker);
    markup.push(sizlate.doRender(archiveTemplate, selectors));

  });
  markup.push('</dl>');
});

var out = sizlate.doRender(indexTemplate, {
  '.lnug-content': {
    innerHTML: markup.join(' '),
    className: 'lnug-archive'
  },
  '.lnug-nextmeetup': nextEvent(),
  '.text-center.talk-label': 'Archive'
});

fs.writeFile('./archive.html', out, function(e) {
  console.log('Archive has been updated', e);
});
