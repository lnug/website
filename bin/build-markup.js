#!/usr/bin/env node

'use strict'

var speclate = require('speclate')

var nextEvent = require('../lib/next-event-from-file')
var generateMaps = require('../lib/generate-maps')
var titoLink = require('../lib/tito-link')

//  var sponsorSelectors = require('../lib/sponsors-selectors')

var venue = require('../data/venues/makers.json')

var eventDate = nextEvent()
// commenting out becuase this gets overriden below. This needs to get moved into separate files so it can be easily switched out.

// not in use yet.
// var sponsors = {
//     gold: [
//         {
//             url: 'https://www.braintreepayments.com/',
//             name: 'BrainTree Payments',
//             img: './public/braintree.png'
//         },
//         {
//             url: 'https://stackoverflow.com/',
//             name: 'Stack Overflow',
//             img: './public/stackoverflow.jpg'
//         },
//         {
//             url: 'https://strongloop.com/',
//             name: 'Strongloop',
//             img: './public/strongloop.png'
//         },
//         {
//             url: 'http://yld.io',
//             name: 'YLD!',
//             img: './public/yld.jpg'
//         }
//     ],
//     silver: [
//         {
//             url: 'https://artificial.io/',
//             name: 'artificial labs',
//             img: './public/artificial-labs.jpg'
//         },
//         {
//             url: 'https://jscrambler.com/',
//             name: 'JScrambler',
//             img: './public/jscramble.png'
//         }
//     ],
//     bronze: [],
//     community: [
//         {
//             url: 'http://nexttick.io',
//             name: 'Nexttick',
//             img: './public/nexttick.jpg'
//         }
//     ]
// }

var spec = {
  '/index.html': {
    page: 'home',
    spec: {
      '.lnug-ticket': {
        component: 'ticket',
        data: {
          '.lnug-nextmeetup': eventDate,
          '.venue': venue.title,
          '.detail': venue.detail,

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
    page: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/speakers/master/README.md')
  },
  '/sponsor.html': {
    page: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/resources/master/sponsors.md')
    // there is a bug in speclate which needs fixing to get this working, for the time being sponsors are hard coded in the markdown file.
    //   spec: {
    //     '.gold-sponsor': {
    //         component: 'sponsor',
    //         data: sponsorSelectors(sponsors.gold)
    //     },
    //     '.silver-sponsor': {
    //         component: 'sponsor',
    //         data: sponsorSelectors(sponsors.silver)
    //     },
    //     '.bronze-sponsor': {
    //         component: 'sponsor',
    //         data: sponsorSelectors(sponsors.bronze)
    //     },
    //     // '.community-sponsor': {
    //     //     component: 'sponsor',
    //     //     data: sponsorSelectors(sponsors.community)
    //     // }
    //   }
  },
  '/contact.html': {
    page: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/feedback/master/ORGANISERS.md')
  },
  '/related-meetups.html': {
    page: require('../lib/markdown')('https://raw.githubusercontent.com/lnug/related-meetups/master/README.md')
  }
}

generateMaps(venue.location)
speclate.generate(spec)
