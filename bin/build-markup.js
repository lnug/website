#!/usr/bin/env node

'use strict';

var nextEvent = require('../lib/next-event-from-file');
var speclate = require('speclate');
var generateMaps = require('../lib/generate-maps');
var titoLink = require('../lib/tito-link');

var eventDate = nextEvent();
var venue =  {
    title: 'Stack Exchange',
    address: [
        '168-172 Bentima House',
        'Old Street',
        'London',
        'EC1V 9BP'
    ],
    location: {
        lat: '51.5241333',
        long: '-0.0960868',
        wide: {
            long: '-0.0998068',
            lat: '51.5241333',
            scale: '17',
            size: '1280x400.png'
        },
        thin: {
            long: '-0.0960868',
            lat: '51.5258033',
            scale: '17',
            size: '700x700.png'
        }
    }
};


var spec = {
  '/index.html': {
    page: 'home',
    spec: {
      '.lnug-ticket': {
        component: 'ticket',
        data: {
          '.lnug-nextmeetup': eventDate,
          '.venue': venue.title,
          'address': venue.address.join('<br />'),
          '.address a': {
              href: 'https://www.google.co.uk/maps/search/' + venue.address.join(', ')
          },
          'a.cta': {
              'href': titoLink()
          }
        }
      },
      '.lnug-content': {
          component: 'speaker',
        data: require('../lib/speaker-selectors')
      },
      '.lnug-mailing-list': {
        component: 'sign-up'
      }
    }
  },
  '/archive.html': {
    page: 'archive',
    spec: {
      'ul.archive': {
        component: 'archive',
        data: require('../lib/archive-selectors')
      }
    }
  },
  '/code-of-conduct.html': {
    page: 'code-of-conduct'
  },
  '/speak.html': {
    page: 'empty',
    spec: {
      '.markdown': {
        component: 'empty',
        data: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/speakers/master/README.md')
      }
    }
  },
  '/sponsor.html': {
    page: 'empty',
    spec: {
      '.markdown': {
        component: 'empty',
        data: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/related-meetups/master/README.md')
      }
    }
  },
  '/contact.html': {
    page: 'empty',
    spec: {
      '.markdown': {
        component: 'empty',
        data: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/feedback/master/ORGANISERS.md')
      }
    }
  },
  '/related-meetups.html': {
    page: 'empty',
    spec: {
      '.markdown': {
        component: 'empty',
        data: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/related-meetups/master/README.md')
      }
    }
  }
};

generateMaps(venue.location);
speclate.generate(spec);
