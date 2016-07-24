var nextEvent = require('./lib/next-event-from-file')
var titoLink = require('./lib/tito-link')
var sponsorSelectors = require('./lib/sponsors-selectors')
var venue = require('./api/venues/makers.json')
var eventDate = nextEvent()
var sponsors = require('./api/sponsors.json')

module.exports = {
  '/': {
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
        data: require('./lib/speaker-selectors')
      },
      '.lnug-mailing-list': {
        component: 'sign-up'
      }
    }
  },
  '/image-gallery.html': {
    page: 'image-gallery',
    selectors: {
      'title': 'Image Gallery - LNUG',
      'a[href="./image-gallery.html"]': {
        className: 'active'
      }
    },
    spec: {
      'section#gallery': {
        component: 'image-gallery',
        data: require('./lib/image-gallery')
      }
    }
  },
  '/archive.html': {
    page: 'archive',
    selectors: {
      'title': 'Archive - LNUG',
      'a[href="./archive.html"]': {
        className: 'active'
      }

    },
    spec: {
      'ul.archive': {
        component: 'archive',
        data: require('./lib/archive-selectors')
      }
    }
  },
  '/code-of-conduct.html': {
    page: 'code-of-conduct',
    selectors: {
      'title': 'Code of Conduct - LNUG',
      'a[href="./code-of-conduct.html"]': {
        className: 'active'
      }
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
      'a[href="./related-meetups.html"]': {
        className: 'active'
      },
      'title': 'Related Meetups - LNUG'
    }
  }
}
