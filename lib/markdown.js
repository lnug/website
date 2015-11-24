'use strict';

var superagent = require('superagent');
var marked = require('marked');
var sizlate = require('sizlate');
console.log(sizlate)

module.exports = function (markdownUrl, selectors) {
    return function(callback) {
            superagent
            .get(markdownUrl)
            .end(function (error, data) {
                if (error) {
                    throw error;
                }
                callback(null, marked(data.text));
            });
    }
};
