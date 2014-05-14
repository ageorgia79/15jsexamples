$(".button1").click(function(){ 
 $(".example1").css("background","yellow");
 });



$(function () {
  $(".button2").click(function () {
    $("<p>Awesome</p>").appendTo(".example2");
  });
});



$(".button3").click(function() {
  $(".example3").animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {

  });
});



$(".button4").click(function(){
  $(".example4 ul").css("color","blue");
});



$(".button5").click(function() {
  $(".example5").animate(
    {opacity: 0},
    'slow',
    'swing',
    function() {
      alert('404.Server Error');
    });
});



$( ".button6" ).click(function() {
  $( ".example6" ).animate({
    width: "70%",
    height: "10%",
    opacity: 0.5000,
    marginLeft: "2in",
    marginRight: "2in",
  }, 4000 );
});



$(".button7").click(function() {
  window.location = 'https://www.facebook.com' + this.id;
});



$(".button8").click(function() {
  $(".example8 p").show( "slow");
});


$(".button9").click(function() {
  $(".example9").hide(5000);
});

