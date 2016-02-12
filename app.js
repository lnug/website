$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });

    // we shouldn't apply the magnificPopup to smaller devices 
    if ($(window).width() > 950) {
        $('#gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
        });
    }

    if ($("#home-gallery").length > 0) {
        $.getJSON("image-gallery.json", function(data) {
            if (data.spec["section#gallery"].data) {
                var images = data.spec["section#gallery"].data;
                var img1, img2, img3;
                while (true) {
                    img1 = Math.floor((Math.random() * images.length));
                    img2 = Math.floor((Math.random() * images.length));
                    img3 = Math.floor((Math.random() * images.length));
                    if (img1 !== img2 && img1 !== img3 && img2 !== img3) {
                        break;
                    }
                }


                // var items = [];
                // $.each(data, function(key, val) {
                //     items.push("<li id='" + key + "'>" + val + "</li>");
                // });


                $("#home-gallery").append("<img src='" + images[img1].a.href + "'>");
                $("#home-gallery").append("<img src='" + images[img2].a.href + "'>");
                $("#home-gallery").append("<img src='" + images[img3].a.href + "'>");
                // $("<ul/>", {
                //     "class": "my-new-list",
                //     html: items.join("")
                // }).appendTo("body");
            }
        });
    }

});
