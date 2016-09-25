// JS for menu collapse after selection
$(".navbar-nav li a").click(function(event) {
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
});

// Provides smooth scroll through website
$(document).ready(function() {
  // navigation click actions
  $('.scroll-link').on('click', function(event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function(event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });
});
// scroll function
function scrollToID(id, speed) {
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({
    scrollTop: targetOffset
  }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
  console = {
    log: function() {}
  };
}

// Navbar transition on scroll
$(window).on("scroll", function() {
  if($(window).scrollTop() > 600) {
    $(".navbar").addClass("nav_fade");
    $(".navbar-default .navbar-nav>li>a").css("color", "white");
    $(".navbar-default .navbar-toggle .icon-bar").css("background", "white");
  } else {
    $(".navbar").removeClass("nav_fade");
    $(".navbar-default .navbar-nav>li>a").css("color", "black");
    $(".navbar-default .navbar-toggle .icon-bar").css("background", "black");
  }
});
