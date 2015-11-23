'use strict';

var thisMonth = require('../data/this-month.json');

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

module.exports = function (callback) {
    var speakers = thisMonth.map(speakerSelectors);
    callback(null, speakers);
};
