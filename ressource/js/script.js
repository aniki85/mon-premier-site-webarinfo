$(document).ready(function() {

  $("h1").click(function () {
    $(this).css("background-color", "#ff0000");
  })

    $(".js--waypoint-livres").waypoint(function(direction){
      if (direction=="down"){
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    })

    $(".js-scroll-livres").click(function() {
          $("html, body").animate({scrollTop: $(".js-section-livres").offset().top}, 3000);
        })

});
