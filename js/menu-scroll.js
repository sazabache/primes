$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }

});


//Menu
/*$(".navbar-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});*/