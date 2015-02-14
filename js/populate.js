text = "";

$.getJSON( "js/data.json", function( data ) {
    data.all.forEach(function(a,b,c){ text += 
    "<div class=\"row lnug-singlespeaker\"> \
    <div class=\"col-xs-4 col-md-4 text-center lnug-speakerphoto\"> \
     <img class=\"img-circle\" alt=\"140x140\" src=\""+a.avatar+"\" style=\"width: 140px; height: 140px;\"> \
            </div> \
            <div class=\"col-xs-8 col-md-8 lnug-speakercard\"> \
              <div class=\"col-xs-12 lnug-speakername\">"+a.name+"</div> \
              <div class=\"col-xs-12 lnug-talktitle\">"+a.title+"</div> \
              <div class=\"col-xs-12 lnug-talkdesc\">"+a.desc+"</div> \
              <div class=\"col-xs-12 lnug-twitterhandle\"><a href=\"https://github.com/"+a.username+"\">@"+a.username+"</a></div> \
            </div> \
          </div>";
    });
    $(".lnug-content").html(text);
 });

