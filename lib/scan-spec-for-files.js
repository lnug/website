module.exports = function (spec, offline) {
  var getImages = function (selectors) {
    var images = []
    Object.keys(selectors).forEach(function (selector) {
      if (selectors[selector].data) {
        selectors[selector].data.forEach(function (item) {
          images.push(item.img.src)
        })
      }
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
