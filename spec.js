var nextEvent = require('./lib/next-event-from-file')
var titoLink = require('./lib/tito-link')
var venue = require('./data/venues/makers.json')
var eventDate = nextEvent()
var imageGallery = require('./lib/image-gallery')

var speakerSelectors = require('./lib/speaker-selectors')
var archiveSelectors = require('./lib/archive-selectors')

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
    'manifest.json',
    'client/index-compiled.js'
  ],
  scanSpecForFiles: function (spec, offline) {
    var getImages = function (selectors) {
      var images = []
      Object.keys(selectors).forEach(function (selector) {
        selectors[selector].data.forEach(function (item) {
          images.push(item.img.src)
        })
      })
      return images
    }
    // get image gallery
    var galleryThumbs = getImages(spec['/image-gallery.html'].spec)
    var otherFiles = []
    // we only need to move this for offline (its already in the docs folder)
    if (offline) {
      otherFiles.push('client/index-compiled.js')
    }
    spec.options.files = spec.options.files.concat(galleryThumbs, otherFiles)
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
      },
      'small.notice': "Map provided by © <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &amp; © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
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

