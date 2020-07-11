$(window).on('resize scroll', function() {
  let elementTop = $('.BackdropZero').offset().top;
  let elementBottom = elementTop + $('.BackdropZero').outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  let isInViewport = elementBottom > viewportTop && elementTop < viewportBottom;

  if (isInViewport) {
    $('.BackdropZero').css({
      top: $(window).scrollTop() / 10 - 260 + 'px'
    });
  }
});
