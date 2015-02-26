'use strict';

/**
 * Adds speaker details to the index page.
 */

var sizlate = require('sizlate');

var fs = require('fs');

var data = require('./js/data.json');

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
        '.desc': speaker.desc,
        'img': {
            src: speaker.avatar
        },
        '.lnug-twitterhandle a': {
            innerHTML: '@' + speaker.username,
            href: 'https://github.com/' + speaker.username
        }
    };
}

var speakers = data.all.map(function(speaker) {
    var selectors = speakerSelectors(speaker);
    return sizlate.doRender(speakerTemplate, selectors);
});


var out = sizlate.doRender(indexTemplate, {
    '.lnug-content': speakers.join(' ')
});

fs.writeFileSync('./index.html', out, 'utf8');
