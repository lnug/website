var nextEvent = require('./lib/next-event-from-file')
var titoLink = require('./lib/tito-link')
var sponsorSelectors = require('./lib/sponsors-selectors')
var venue = require('./api/venues/makers.json')
var eventDate = nextEvent()
var sponsors = require('./api/sponsors.json')

module.exports = {
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
        data: require('./lib/speaker-selectors')
      },
      '.lnug-mailing-list': {
        component: 'sign-up'
      }
    }
  },
  '/image-gallery.html': {
    page: 'image-gallery',
    spec: {
      'section#gallery': {
        component: 'image-gallery',
        data: require('./lib/image-gallery')
      }
    }
  },
  '/archive.html': {
    page: 'archive',
    spec: {
      'ul.archive': {
        component: 'archive',
        data: require('./lib/archive-selectors')
      }
    }
  },
  '/code-of-conduct.html': {
    page: 'code-of-conduct'
  },
  '/speak.html': {
    page: 'speak'
  },
  '/sponsor.html': {
    page: 'sponsor',
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
    page: 'contact'
  },
  '/related-meetups.html': {
    page: 'related-meetups'
  }
}