#!/usr/bin/env node

'use strict'

var speclate = require('speclate')

var nextEvent = require('../lib/next-event-from-file')
var generateMaps = require('../lib/generate-maps')
var titoLink = require('../lib/tito-link')

//  var sponsorSelectors = require('../lib/sponsors-selectors')

var venues = require('../data/venue.json')

// select the relevant venue from the available choices
var venue = venues[2];

var eventDate = nextEvent()

// commenting out becuase this gets overriden below. This needs to get moved into separate files so it can be easily switched out.

 //var venue =  {
 //    title: 'Stack Exchange',
 //    address: [
 //        '168-172 Bentima House',
 //        'Old Street',
 //        'London',
 //        'EC1V 9BP'
 //    ],
 //    location: {
 //        lat: '51.5241333',
 //        long: '-0.0960868',
 //        scale: 17,
 //        wide: {
 //            long: '-0.0998068',
 //            lat: '51.5241333',
 //            scale: '17',
 //            size: '1280x400.png'
 //        },
 //        thin: {
 //            long: '-0.0960868',
 //            lat: '51.5258033',
 //            scale: '17',
 //            size: '700x700.png'
 //        }
 //    }
 //};

//var venue = {
//  title: '',
//  address: [
//  ],
//  detail: 'Venue - Unknown <hr /> Could your company host LNUG? <a href="mailto:contact@lnug.com">contact@lnug.com</a>',
//  location: {
//    wide: {
//      lat: '51.5021333',
//      scale: 11,
//      long: '-0.0960868',
//      size: '1280x400.png'
//    },
//    thin: {
//      lat: '51.5741333',
//      long: '-0.0960868',
//      scale: 11,
//      size: '700x700.png'
//    }
//  }
//}

//var venue = {
//  title: 'Makers Academy',
//  address: [
//    '50 - 52 Commercial St',
//    'London E1 6LT'
//  ],
//  //detail: 'Venue - Makers Academy <hr /> 50 - 52 Commercial St <br>  London E1 6LT',
//  location: {
//    lat: '51.517320',
//    long: '-0.073281',
//    scale: 17.5,
//    wide: {
//      lat: '51.517320',
//      long: '-0.073281',
//      scale: 17.5,
//      size: '1280x400.png'
//    },
//    thin: {
//      lat: '51.517320',
//      long: '-0.073281',
//      scale: 17.5,
//      size: '700x700.png'
//    }
//  }
//}

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
