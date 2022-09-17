$(document).ready(function(){

/*================= Wire =================*/
  $(".btnwire").click(function(){
    if ($('.bulb').attr("src") == "img/Bulb-On.png") {
      $('.bulb').attr("src","img/Bulb-Off.png");
            $(this).attr("src","img/btn1.png");

    } else {
      $('.bulb').attr("src","img/Bulb-On.png");

    }
    
  });


/*================= NOT =================*/
  var i = 0, timeOut = 0;
  $('.btnnot').on('mousedown touchstart', function(e) {
      $('.bulbnot').attr("src","img/Bulb-Off.png");
      timeOut = setInterval(function(){
        console.log(i++);
      }, 100);
    }).bind('mouseup mouseleave touchend', function() {
       $('.bulbnot').attr("src","img/Bulb-on.png");
      clearInterval(timeOut);
    });

/*================= OR =================*/

 
  $('#firstcheckbox').click(function(){
    if ($(this).prop("checked") == true) {
        $('.bulbor').attr("src","img/Bulb-On.png");
    }
    else if($("#secondcheckbox").prop("checked") == true){
            $('.bulbor').attr("src","img/Bulb-On.png");
    }
    else{
      $('.bulbor').attr("src","img/Bulb-Off.png");
    }
  });
   $('#secondcheckbox').click(function(){
    if ($(this).prop("checked") == true) {
              $('.bulbor').attr("src","img/Bulb-On.png");

    }
    else if($('#firstcheckbox').prop("checked") == true){
            $('.bulbor').attr("src","img/Bulb-On.png");

    }else{
            $('.bulbor').attr("src","img/Bulb-Off.png");

    }
  });

/*================= AND =================*/

 $('#fcheck-and').click(function(){
    if ($(this).prop("checked") == true) {
        
        if ($("#seccheck-and").prop("checked") == true) {
            $('.bulband').attr("src","img/Bulb-On.png");
        }
    }
    else{
      $('.bulband').attr("src","img/Bulb-Off.png");
    }
  });

   $('#seccheck-and').click(function(){
    if ($(this).prop("checked") == true) {
              
         if ($("#fcheck-and").prop("checked") == true) {
              $('.bulband').attr("src","img/Bulb-On.png");
        }

    }
    else{
            $('.bulband').attr("src","img/Bulb-Off.png");
    }
  });

});