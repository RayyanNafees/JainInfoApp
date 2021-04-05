var pagesContainer = new Swiper('#pages-container-inner', {
	slidesPerView: 1,
	watchSlidesProgress: true,
	watchSlidesVisibility: true
});

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $(".links-container");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".active").outerWidth())
        .css("left", $(".active").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
	
		pagesContainer.on('slideChangeStart', function() {
			$el = $('.active');
			leftPos = $el.position().left;
        newWidth = $el.outerWidth();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
		});
});

pagesContainer.on('slideChangeStart', function() {
	$('.nav-link').removeClass('active');
	var currentIndex = pagesContainer.activeIndex;
	$('.nav-link:nth-child('+(currentIndex+1)+')').addClass('active');
});

$('.nav-link').on('click', function() {
  var $magicLine = $("#magic-line");
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
  $el = $('.active');
  leftPos = $el.position().left;
  newWidth = $el.outerWidth();
  $magicLine.stop().animate({
    left: leftPos,
    width: newWidth
  });
  pagesContainer.slideTo($('.nav-link').index($(this)));
});