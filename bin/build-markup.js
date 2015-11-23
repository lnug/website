#!/usr/bin/env node

'use strict';



var eventDate = '12th October 2014';
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




var speclate = require('speclate');

var generateMaps = require('../lib/generate-maps');



var spec = {
  '/index.html': {
    page: 'home',
    spec: {
      '.lnug-ticket': {
        component: 'ticket',
        data: {
          '.lnug-nextmeetup': eventDate,
          '.venue': 'Royal Albert Hall'
        }
      },
      '.map': {
        component: 'map',
        data: {}
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





//
// /**
//  * Adds speaker details to the index page.
//  */
//
// var sizlate = require('sizlate');
// var fs = require('fs');
// var data = require('../data/this-month.json');
// var nextEvent = require('../lib/next-event-from-file');
// var titoLink = require('../lib/tito-link');
//
// var indexTemplate = fs.readFileSync('./templates/index.html', 'utf8');
// var speakerTemplate = fs.readFileSync('./templates/speaker.html', 'utf8');
// var sponsorsTemplate = fs.readFileSync('./sponsors.html', 'utf8');
// var cocContent = fs.readFileSync('./code-of-conduct-content.html', 'utf8');
//
// /**
//  * Turns speaker object into selector object to be used by sizlate.
//  * @param  {Object} speaker Speaker take from ./js/data.json
//  * @return {Object}         Sizlate selector object.
//  */
// function speakerSelectors(speaker) {
//   return {
//     '.name': speaker.name,
//     '.title': speaker.title,
//     '.desc': speaker.description,
//     img: {
//       src: speaker.img
//     },
//     '.lnug-twitterhandle a': {
//       innerHTML: '@' + speaker.handle,
//       href: 'https://github.com/' + speaker.handle
//     }
//   };
// }
//
// var speakers = data.map(function(speaker) {
//   var selectors = speakerSelectors(speaker);
//   return sizlate.doRender(speakerTemplate, selectors);
// });
// var nextEventDate = nextEvent();
// var out = sizlate.doRender(indexTemplate, {
//   '.lnug-nextmeetup': nextEvent(),
//   '.lnug-content': speakers.join(' '),
//   '#lnug-tkt': {
//       href: titoLink()
//   }
// });
//
// var out_sponsors = sizlate.doRender(sponsorsTemplate, {
//   '.lnug-nextmeetup': nextEvent(),
//   '#lnug-tkt': {
//       href: titoLink()
//   }
// });
//
// var out_coc = sizlate.doRender(indexTemplate, {
//   '.lnug-nextmeetup': nextEvent(),
//   '.lnug-content': cocContent,
//   '.talk-label': 'Code of conduct at LNUG events',
//   '#lnug-tkt': {
//       href: titoLink()
//   }
// });
//
// fs.writeFileSync('./index.html', out, 'utf8');
// fs.writeFileSync('./sponsors.html', out_sponsors, 'utf8');
// fs.writeFileSync('./code-of-conduct.html', out_coc, 'utf8');
