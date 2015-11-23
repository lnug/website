'use strict';

var superagent = require('superagent');
var marked = require('marked');

module.exports = function (callback) {

    superagent
    .get('https://raw.githubusercontent.com/lnug/speakers/master/README.md')
    .end(function (error, data) {
        if (error) {
            throw error;
        }
        callback(null, {
            'div': marked(data.text)
        });
    });
};
