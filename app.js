// $(function () {
//   $('img.lazy').lazyload({
//     'effect': 'fadeIn'
//   })

//   // add 3 random images to home page
//   if ($('#home-gallery').length > 0) {
//     $.getJSON('image-gallery.json', function (data) {
//       if (data.spec['section#gallery'].data) {
//         var images = data.spec['section#gallery'].data
//         var img1, img2, img3, count

//         while (true) {
//           count += 1
//           img1 = Math.floor((Math.random() * images.length))
//           img2 = Math.floor((Math.random() * images.length))
//           img3 = Math.floor((Math.random() * images.length))
//           if (img1 !== img2 && img1 !== img3 && img2 !== img3) {
//             break
//           }

//           // yeah I know, this is not the most elegant solution
//           // but just to guarantee we don't fall on a endless-loop due to some black magic :o)
//           if (count > 100) {
//             break
//           }
//         }

//         $('#home-gallery').append("<a href='./image-gallery.html'><img src='" + images[img1].a.href + "'></a>")
//         $('#home-gallery').append("<a href='./image-gallery.html'><img src='" + images[img2].a.href + "'></a>")
//         $('#home-gallery').append("<a href='./image-gallery.html'><img src='" + images[img3].a.href + "'></a>")
//       }
//     })
//   }
// })
