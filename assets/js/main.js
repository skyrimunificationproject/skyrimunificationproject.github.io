var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {
  $("li.tag-h1").on("click", "a", function(event) {
	  console.log("intercepted click");
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    event.preventDefault();
  });
  
  $("li.tag-h2").on("click", "a", function(event) {
	  console.log("intercepted click");
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});