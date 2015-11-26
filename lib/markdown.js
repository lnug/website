'use strict';

var superagent = require('superagent');
var marked = require('marked');
var sizlate = require('sizlate');

module.exports = function (markdownUrl) {
    return function(callback) {
            superagent
            .get(markdownUrl)
            .end(function (error, data) {
                if (error) {
                    throw error;
                }
                callback(null, '<div class="markdown">' + marked(data.text) + '</div>');
            });
    }
};
