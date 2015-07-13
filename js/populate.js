
function displayDate(){
  $.getJSON( "js/data.json", function( data ) {
    $(".lnug-nextmeetup").html(data.all[0].date);
 });
}

function displayTickets(){
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
$("#lnug-tkt").attr("href","https://ti.to/lnug/"+ monthNames[d.getMonth()].toLowerCase()+"-"+d.getFullYear() );
}

function displaySpeakers(){
  var text = "";
  $.getJSON( "js/data.json", function( data ) {
    data.all.forEach(function(a,b,c){ text +=
    "<div class=\"row lnug-singlespeaker\"> \
    <div class=\"col-xs-4 col-md-4 text-center lnug-speakerphoto hidden-xs\"> \
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
}

function displayArchive(){
  $.getJSON("js/archive.json", function (data) {
  var allmonths = [];
  data.data.forEach(function(a){
    var x = [];
    a.speakers.forEach(function (b) {
      x.push("<dd><a href='"+b.url+"'>"+b.name+"</a> - "+b.title+"</dd>")
    });
    allmonths.push("<dl><dt>"+a.date+"</dt>"+x.join("")+"</dl>");
    //allmonths.push("<dl><dt>"+a.date+" - <a href='"+a.lanyrd+"'  target='_blank'>Lanyrd</a></dt>"+x.join("")+"</dl>");
  });
  $(".lnug-archive").html(allmonths.join(""));
   }
  )}
