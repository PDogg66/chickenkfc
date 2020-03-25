

var  body = document.getElementsByTagName('body')[0];
var cndceShapes = document.querySelectorAll('.cndce-shape');

body.onload = function(){
	for(var i=0; i < cndceShapes.length; i++){
		cndceShapes[i].classList.add('loaded');	
	}
}
$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});
