'use strict'

var slides = ['hello', 'requirements', 'dev', 'sizlate', 'spec', 'speclate', 'client-side', 'offline', 'app-shell', 'tips', 'contribute', 'thanks']

var slideNav = (activePageName) => {

  var active = slides.length
  return slides.map((name, index) => {
    var isActive = ''
    if (name === activePageName) {
      active = index
      isActive = 'active'
    }
    if (active < index) {
      isActive = 'hidden'
    }
    return {
      a: {
        href: `/slides/${name}.html`,
        id: `slide-nav-${index}`,
        className: isActive,
        innerHTML: name
      }
    }
  })
}

var slideSpec = (name) => {
  return {
    page: 'slides/' + name,
    spec: {
      title: name + ' - Taking LNUG offline',
      'html': {
        className: 'slide'
      },
      'nav a.slides': {
        className: 'active'
      },
      '#slide-nav': {
        component: 'slide-nav',
        data: slideNav(name)
      }
    }
  }
}

module.exports = (spec) => {
  slides.forEach((name) => {
    spec[`/slides/${name}.html`] = slideSpec(name)
  })
  return spec
}
