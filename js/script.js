$(document).ready(function(){

/*================= Wire =================*/
  $(".btnwire").click(function(){
    if ($('.bulb').attr("src") == "img/Bulb-On.png") {
      $('.bulb').attr("src","img/Bulb-Off.png");
            $(this).attr("src","img/btn1.png");
    } else {
      $('.bulb').attr("src","img/Bulb-On.png");
      $(this).attr("src","img/btn2.png");
    }
    
  });


/*================= NOT =================*/
 /* var i = 0, timeOut = 0;
  $('.btnnot').on('mousedown touchstart', function(e) {
      $('.bulbnot').attr("src","img/Bulb-Off.png");
      $(this).attr("src","img/btn2.png");
      timeOut = setInterval(function(){
        console.log(i++);
      }, 100);
    }).bind('mouseup mouseleave touchend', function() {
       $('.bulbnot').attr("src","img/Bulb-on.png");
       $(this).attr("src","img/btn1.png");
      clearInterval(timeOut);
    });  */

    $(".btnnot").click(function(){
      if ($('.bulbnot').attr("src") == "img/Bulb-On.png") {
        $('.bulbnot').attr("src","img/Bulb-Off.png");
              $(this).attr("src","img/btn2.png");
      } else {
        $('.bulbnot').attr("src","img/Bulb-On.png");
        $(this).attr("src","img/btn1.png");
      }
      
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

/*================= NOR =================*/

$('#check1-nor').click(function(){
  if ($(this).prop("checked") == true) {
          $('.bulbnor').attr("src","img/Bulb-Off.png");
  }else if($('#check2-nor').prop("checked") == true){
    $('.bulbnor').attr("src","img/Bulb-Off.png");

  }
  else{
    $('.bulbnor').attr("src","img/Bulb-On.png");
  }
 
});

$('#check2-nor').click(function(){
  if ($(this).prop("checked") == true) {
          $('.bulbnor').attr("src","img/Bulb-Off.png");
  } else if($('#check1-nor').prop("checked") == true){
    $('.bulbnor').attr("src","img/Bulb-Off.png");

  }
  else{
    $('.bulbnor').attr("src","img/Bulb-On.png");
  }
 
});

/*================= NAND =================*/

$('#check1-nand').click(function(){
  if ($(this).prop("checked") == true) {
          if ($('#check2-nand').prop("checked") == true) {
            $('.bulbnand').attr("src","img/Bulb-Off.png");
          }
  }else{
    $('.bulbnand').attr("src","img/Bulb-On.png");

  }

});

$('#check2-nand').click(function(){
  if ($(this).prop("checked") == true) {
          if ($('#check1-nand').prop("checked") == true) {
            $('.bulbnand').attr("src","img/Bulb-Off.png");
          }
  }else{
    $('.bulbnand').attr("src","img/Bulb-On.png");
  }

});

/*================= XOR =================*/

$('#check1-xor').click(function(){
  if ($(this).prop("checked") == true) {

        if ($("#check2-xor").prop("checked") == false) {
          $('.bulbxor').attr("src","img/Bulb-On.png");
        }else if($("#check2-xor").prop("checked") == true){
          $('.bulbxor').attr("src","img/Bulb-Off.png");
        }

  }else{
    if ($("#check2-xor").prop("checked") == true) {
      $('.bulbxor').attr("src","img/Bulb-On.png");
    }else{
      $('.bulbxor').attr("src","img/Bulb-Off.png");

    }

  }

});

$('#check2-xor').click(function(){
  if ($(this).prop("checked") == true) {

        if ($("#check1-xor").prop("checked") == false) {
          $('.bulbxor').attr("src","img/Bulb-On.png");
        }else if($("#check1-xor").prop("checked") == true){
          $('.bulbxor').attr("src","img/Bulb-Off.png");
        }

  }else{
    if ($("#check1-xor").prop("checked") == true) {
      $('.bulbxor').attr("src","img/Bulb-On.png");
    }else{
      $('.bulbxor').attr("src","img/Bulb-Off.png");

    }

  }

});











});