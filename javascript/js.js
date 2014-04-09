// POPUP LOGIN SHOW/HIDE START
$(document).ready(function() {
	$('.enter').click(function(){
		$('.popUpContainerLogin').fadeIn(300)
	});
return true;
});

$(document).ready(function() {
	$('.closeButtonLogin').click(function(){
		$('.popUpContainerLogin').fadeOut(300)
	});
return true;
});

$(document).ready(function() {
	 $('body').keyup(function(e) {
            if (e.keyCode == 27) {
                $('.popUpContainerLogin').fadeOut(300);
          }
     });
});

// POPUP SHOW/HIDE END

// ---------------POPUP REGISTRATION SHOW/HIDE START
$(document).ready(function() {
	$('.register').click(function(){
		$('.popUpContainerRegistration').fadeIn(300)
	});
return true;
});

$(document).ready(function() {
	$('.closeButtonRegistration').click(function(){
		$('.popUpContainerRegistration').fadeOut(300)
	});
return true;
});

$(document).ready(function() {
	 $('body').keyup(function(e) {
            if (e.keyCode == 27) {
                $('.popUpContainerRegistration').fadeOut(300);
          }
     });
});
// ------------------POPUP REGISTRATION SHOW/HIDE END




// SCROLING SIDEBAR START
// $(function() {
// var offset = $("#sidebar").offset();
// var topPadding = 10;
// $(window).scroll(function() {

// if ($(window).scrollTop() > offset.top) {
// $("#sidebar").stop().animate({
// marginTop: $(window).scrollTop() - offset.top + topPadding

// });
// } else {
// $("#sidebar").stop().animate({
// marginTop: 10
// });
// }
// });
// });
// SCROLING SIDEBAR END