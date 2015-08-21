var readMeUrl = "https://api.github.com/repos/lnug/related-meetups/readme";
var url = "http://raw.github.com/lnug/related-meetups/master/README.md";
function onSucess(data){
    console.log(data);
    var converter = new showdown.Converter(),
        html      = converter.makeHtml(data);

    $('.events').html(html);
}

function makeRequest(url){
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Accept', 'application/vnd.github.VERSION.raw');},
        success: onSucess
    });
}

makeRequest(readMeUrl);