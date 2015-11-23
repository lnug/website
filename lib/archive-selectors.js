
var archive = require('../data/archive.json');


var Encoder = require('node-html-encoder').Encoder;
var encoder = new Encoder('entity');



function eventSelectors(event) {
    var speakers = event.speakers.map(function (speaker) {
        // naughty.
        return '<li>' +  speaker.title + ' -  <a href="' + speaker.url + '">' + speaker.name + '</a> ' + '</li>';
    });
    return {
        '.date': event.date,
        '.lanyrd': event.lanyrd,
        '.speakers': speakers.join(' ')
    }
}

function speakerSelectors (event) {
    return {
        'a': {
            innerHTML: speaker.name,
            href: speaker.url
        },
        'span': (' - ' + encoder.htmlEncode(speaker.title))
    };
}

module.exports = function (callback) {
    var speakers = archive.map(eventSelectors);
    console.log(speakers);
    callback(null, speakers);
    return speakers;
};
