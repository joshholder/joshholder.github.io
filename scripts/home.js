/* globals $: false */
/* jshint strict: false */

$(function () {

  // set #home-top to full screen
  function fullscreen(){
    $('#home-page .top').css({
      height: ($(window).height())
    });

    $('#home-page .right').width(
      $(window).width() - ($('#home-page .left').width() + 415)
    );
  }

  fullscreen();
  $(window).resize(function() {
    fullscreen();
  });

  if ($(window).width() > 767) {
    $('.artwork-wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.artwork-nav'
    });
    $('.artwork-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.artwork-wrapper',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  }

});
