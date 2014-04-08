// POPUP SHOW/HIDE START
$(document).ready(function() {
	$('.enterButton span , .enterButton').click(function(){
		$('.popUpContainer').fadeIn(300)
	});
return true;
});

$(document).ready(function() {
	$('.closeButton').click(function(){
		$('.popUpContainer').fadeOut(300)
	});
return true;
});

$(document).ready(function() {
	 $('body').keyup(function(e) {
            if (e.keyCode == 27) {
                $('.popUpContainer').fadeOut(300);
          }
     });
});

// POPUP SHOW/HIDE END


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