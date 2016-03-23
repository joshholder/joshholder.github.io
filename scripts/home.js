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

});
