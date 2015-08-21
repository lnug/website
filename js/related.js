var readMeUrl = "https://api.github.com/repos/lnug/related-meetups/readme";
function onSucess(data){
    console.log(data);
    var converter = new showdown.Converter();
    converter.setOption('simplifiedAutoLink', 'true');
    var    html      = converter.makeHtml(data);

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