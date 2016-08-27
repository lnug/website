var nextEvent = require('./lib/next-event-from-file')
var titoLink = require('./lib/tito-link')
var sponsorSelectors = require('./lib/sponsors-selectors')
var venue = require('./api/venues/makers.json')
var eventDate = nextEvent()
var sponsors = require('./api/sponsors.json')
var imageGallery = require('./lib/image-gallery')

var speakerSelectors = require('./lib/speaker-selectors')
var archiveSelectors = require('./lib/archive-selectors')
module.exports = {
  '/index.html': {
    page: 'home',
    selectors: {
      title: 'London Node User Group - LNUG'
    },
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
        data: speakerSelectors()
      },
      '.lnug-mailing-list': {
        component: 'sign-up'
      }
    }
  },
  '/image-gallery.html': {
    page: 'image-gallery',
    selectors: {
      'title': 'Image Gallery - LNUG'
    },
    spec: {
      'section#gallery': {
        component: 'image-gallery',
        data: imageGallery()
      }
    }
  },
  '/archive.html': {
    page: 'archive',
    selectors: {
      'title': 'Archive - LNUG'
    },
    spec: {
      'ul.archive': {
        component: 'archive',
        data: archiveSelectors()
      }
    }
  },
  '/code-of-conduct.html': {
    page: 'code-of-conduct',
    selectors: {
      'title': 'Code of Conduct - LNUG'
    }
  },
  '/speak.html': {
    page: 'speak',
    selectors: {
      'nav a.speak': {
        className: 'active'
      },
      'title': 'Speak - LNUG'
    }

  },
  '/sponsor.html': {
    page: 'sponsor',
    selectors: {
      'nav a.sponsor': {
        className: 'active'
      },
      'title': 'Sponsor - LNUG'
    },
    spec: {
      '.gold-sponsor': {
        component: 'sponsor',
        data: sponsorSelectors(sponsors.gold)
      },
      '.silver-sponsor': {
        component: 'sponsor',
        data: sponsorSelectors(sponsors.silver)
      },
      '.bronze-sponsor': {
        component: 'sponsor',
        data: sponsorSelectors(sponsors.bronze)
      },
      '.community-sponsor': {
        component: 'sponsor',
        data: sponsorSelectors(sponsors.community)
      }
    }
  },
  '/contact.html': {
    page: 'contact',
    selectors: {
      'title': 'Contact - LNUG',
      'nav a.contact': {
        className: 'active'
      }
    }
  },
  '/related-meetups.html': {
    page: 'related-meetups',
    selectors: {
      'title': 'Related Meetups - LNUG'
    }
  }
}
