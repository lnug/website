var readMeUrl = "https://api.github.com/repos/lnug/related-meetups/readme";

function onSucess(data){
    //var events = data.trim().split('#');
    //console.log(events);
    //var text = '';
    //
    //for(i =1; i <= events.length-1; i++){
    //    text += '<div class=\"event\">'+  events[i]  + '</div>';
    //}

    $('.events').html(data);


}

function makeRequest(url){
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Accept', 'application/vnd.github.VERSION.html');},
        success: onSucess
    });
}

makeRequest(readMeUrl);