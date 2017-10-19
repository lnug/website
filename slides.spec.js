'use strict'

var slides = ['hello', 'requirements', 'dev', 'sizlate', 'speclate', 'spec', 'offline', 'app-shell', 'loading', 'contribute']

var slideNav = slides.map((name, index) => {
  return {
    a: {
      href: `/slides/${name}.html`,
      id: `slide-nav-${index}`,
      innerHTML: name
    }
  }
})

var slideSpec = (name) => {
  return {
    page: 'slides/' + name,
    spec: {
      title: name + 'Taking LNUG offline',
      'html': {
        className: 'slide'
      },
      'nav a.slides': {
        className: 'active'
      },
      '#slide-nav': {
        component: 'slide-nav',
        data: slideNav
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
