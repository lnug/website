var nextEvent = require('./lib/next-event-from-file')
var titoLink = require('./lib/tito-link')
var sponsorSelectors = require('./lib/sponsors-selectors')
var venue = require('./api/venues/makers.json')
var eventDate = nextEvent()
var sponsors = require('./api/sponsors.json')
var imageGallery = require('./lib/image-gallery')

var speakerSelectors = require('./lib/speaker-selectors')
var archiveSelectors = require('./lib/archive-selectors')

var options = {
  outputDir: '/docs',
  files: [
    //'images/gallery/*',
    'css.css',
    'images/texture.png',
    'client/index-compiled.js',
    'images/lnug-logo-monochrome.svg',
    'images/lnug-logo.svg',
    'images/maps/thin.png',
    'images/maps/wide.png',
    'images/favicon/favicon-16x16.png',
    'images/favicon/favicon-128.png',
    'manifest.json'
  ],
  scanSpecForFiles: function (spec) {
    // get image gallery
      var galleryThumbs = require(process.cwd() + '/api/gallery.json').map(function (item) {
        return item.thumb
      })

      var sponsorCategories = spec['/contribute.html'].spec;
      var sponsorImages = [];
      Object.keys(sponsorCategories).forEach(function(sponsorCategory) {
          sponsorCategories[sponsorCategory].data.forEach(function(sponsor) {
            sponsorImages.push(sponsor.img.src)
          })
      })


     spec.options.files = spec.options.files.concat(galleryThumbs, sponsorImages)
      return spec
  }
}
module.exports = {
  '/index.html': {
    page: 'home',
    selectors: {
      title: 'London Node User Group - LNUG',
      h1: {
        className: 'animated bounceInTop'
      }
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
  '/contribute.html': {
    page: 'contribute',
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
  },
  options: options
}

