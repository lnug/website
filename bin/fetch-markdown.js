#!/usr/bin/env node

'use strict'


var fetchMarkdown = require('speclate-fetch-markdown');

var markdownLookups = {
    'related-meetups': 'https://raw.githubusercontent.com/lnug/related-meetups/master/README.md',
    contact: 'https://raw.githubusercontent.com/lnug/feedback/master/ORGANISERS.md'
};

fetchMarkdown(markdownLookups);

