$(document).ready(function() {


for (j = 0; j < 100; j++) {
    for (i = 0; i < 20; i++) { 
      $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      console.log("element " + j + ", " + i + " added");
    }
  }

  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });

$('.element').mouseout(function(){
    $(this).css('background-color','#FF8C00');
  });

});