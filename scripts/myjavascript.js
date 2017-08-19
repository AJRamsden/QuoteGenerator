$(document).ready(function() {

//Quote button click event
  $("#randomQuote").on("click",function(){
    $.getJSON("https://talaikis.com/api/quotes/random/", function(val){
      $("#quote").html(val.quote);
      $("#author").html(val.author);
    });
  });

  //Twitter share button click
  $('.popup').on("click", function(event) {
    var message = $("#quote").html();
    var messageArray = message.split("");
    var newMessage = [];

    for(var x = 0; x < 137; x++){
        newMessage.push(messageArray[x]);
    }
    newMessage = newMessage.join("") + "...";

    $(".popup").attr("href", "http://twitter.com/intent/tweet?text=" + newMessage );

    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    window.open(url, 'popup', opts);

    return false;
  });

  //Copy Quote button
});
