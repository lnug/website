var mainDiv = document.getElementById('home-gallery')

if (mainDiv) {
  var xhttp = new window.XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      var count, img1, img2, img3
      var images = JSON.parse(xhttp.responseText).spec['section#gallery'].data
      if (!images) return
      while (true) {
        count += 1
        img1 = Math.floor((Math.random() * images.length))
        img2 = Math.floor((Math.random() * images.length))
        img3 = Math.floor((Math.random() * images.length))
        if (img1 !== img2 && img1 !== img3 && img2 !== img3) {
          break
        }

        // yeah I know, this is not the most elegant solution
        // but just want to guarantee we don't fall on a endless-loop caused by some black magic voodoo :o)
        if (count > 100) {
          break
        }
      }

      addImage(images[img1].a.href, images[img1].img.src)
      addImage(images[img2].a.href, images[img2].img.src)
      addImage(images[img3].a.href, images[img3].img.src)
    }
  }
  xhttp.open('GET', 'image-gallery.json', true)
  xhttp.send()
}

function addImage (imgURL, thumbURL) {
  var str = '<li class="lnug-image"><a target="_blank" href="' + imgURL + '"><img src="' + thumbURL + '"></a></li>'
  mainDiv.innerHTML += str
}
