var nextEvent = require('./lib/next-event-from-file')
var venue = require('./data/venues/streamingvideo.json')
var eventDate = nextEvent()
var imageGallery = require('./lib/image-gallery')
var ScanSpecForFiles = require('./lib/scan-spec-for-files')

var speakerSelectors = require('./lib/speaker-selectors')
var archiveSelectors = require('./lib/archive-selectors')
var futureSelectors = require('./lib/future-selectors')

var options = {
  outputDir: '/docs',

  appCacheFiles: [
    'appcache-loader.html'
  ],
  files: [
    'css.css',
    'images/texture.png',
    'images/lnug-logo-monochrome.svg',
    'images/lnug-logo.svg',
    'images/maps/thin.png',
    'images/maps/wide.png',
    'images/favicon/favicon-16x16.png',
    'images/favicon/favicon-128.png',
    'images/favicon/favicon-196x196.png',
    'manifest.json',
    'client/index-compiled.js'
  ],
  scanSpecForFiles: ScanSpecForFiles
}
module.exports = {
  '/index.html': {
    page: 'home',
    spec: {
      title: 'London Node User Group - LNUG',
      '.lnug-ticket': {
        component: 'ticket',
        data: {
          '.lnug-nextmeetup': eventDate,
          '.venue': venue.title,
          '.detail': venue.detail,
          'address': venue.address.join('<br />'),
          '.address a': {
            href: 'https://www.youtube.com/channel/UC-qjgj2TnRoI1ZmFFaN3FeQ'
          }
        }
      },
      '.lnug-content': {
        component: 'speaker',
        data: speakerSelectors()
      },
      '.lnug-mailing-list': {
        component: 'sign-up'
      }
    }
  },
  '/image-gallery.html': {
    page: 'image-gallery',
    spec: {
      'title': 'Image Gallery - LNUG',
      'section#gallery': {
        component: 'image-gallery',
        data: imageGallery()
      }
    }
  },
  '/archive.html': {
    page: 'archive',
    spec: {
      'title': 'Archive - LNUG',
      'ul.archive': {
        component: 'archive',
        data: archiveSelectors()
      }
    }
  },
  '/future.html': {
    page: 'future',
    spec: {
      'title': 'Future Events - LNUG',
      'ul.future': {
        component: 'archive',
        data: futureSelectors()
      }
    }
  },
  '/code-of-conduct.html': {
    page: 'code-of-conduct',
    spec: {
      'title': 'Code of Conduct - LNUG'
    }
  },
  '/speak.html': {
    page: 'speak',
    spec: {
      'nav a.speak': {
        className: 'active'
      },
      'title': 'Speak - LNUG'
    }

  },
  '/contribute.html': {
    page: 'contribute',
    spec: {
      'nav a.sponsor': {
        className: 'active'
      },
      'title': 'Sponsor - LNUG'
    }
  },
  '/contact.html': {
    page: 'contact',
    spec: {
      'title': 'Contact - LNUG',
      'nav a.contact': {
        className: 'active'
      }
    }
  },
  '/related-meetups.html': {
    page: 'related-meetups',
    spec: {
      'title': 'Related Meetups - LNUG'
    }
  },
  options: options
}
