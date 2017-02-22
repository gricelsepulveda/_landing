$(document).ready(function () {
  var navpos = $('.cg-navbar_main').offset();
  console.log(navpos.top);
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > navpos.top) {
          $('.cg-navbar_main').addClass('cg-navbar_main_top');
          $('.cg-navbar_main').removeClass('cg-navbar_main_bottom');
          $('.cg-menu_tool').addClass('cg-menu_tool_top');
          $('.cg-menu_tool').removeClass('cg-menu_tool_bottom');
          $('.cg-nav_mobile').addClass('cg-nav_mobile_top');
          $('.cg-nav_mobile').removeClass('cg-nav_mobile_bottom');
          $('.cg-log_on').addClass('cg_button_different');
          $('.cg-log_off').addClass('cg_button_different');
      } else {
          $('.cg-navbar_main').addClass('cg-navbar_main_bottom');
          $('.cg-navbar_main').removeClass('cg-navbar_main_top');
          $('.cg-menu_tool').addClass('cg-menu_tool_bottom');
          $('.cg-nav_mobile').addClass('cg-nav_mobile_bottom');
          $('.cg-nav_mobile').removeClass('cg-nav_mobile_top');
          $('.cg-log_on').removeClass('cg_button_different');
          $('.cg-log_off').removeClass('cg_button_different');
      }
  });
});