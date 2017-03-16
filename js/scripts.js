$(document).ready(function(){
  //INITIAL ANIMATION
  $(".cg-bg_welcome").fadeIn("slow");
  $('.cg-bg_welcome').css(
        {'display': "flex"});
  // TRIGGER MOBILE MENU
  $(".cg-nav_mobile").click(function(){
    $(".cg-menu_ul").animate
      ({
        "left":'0'
      }, 700);
    $(".cg-wrapper_nav_aside").fadeOut("fast");
  });
  $(".cg-menu_ul_close").click(function(){
    $(".cg-menu_ul").animate
      ({
        "left":'-100vw'
      }, 350);
      $(".cg-wrapper_nav_aside").fadeIn("slow");
  });
  // TRIGGER TOOL MENU
  $(".cg-main_li_tool").click(function(){
    if($(".cg-menu_tool, #cg-menu_tool").hasClass("cg-display"))
        {
          $(".cg-menu_tool, #cg-menu_tool").removeClass("cg-display");
        }
    else{
          $(".cg-menu_tool, #cg-menu_tool").addClass("cg-display");
        }
  });
  $(".cg-menu_tool, #cg-menu_tool").mouseleave(function(){
      $(".cg-menu_tool, #cg-menu_tool").removeClass("cg-display");
  });
  $(".cg-tool_li").click(function(){
    $(".cg-menu_tool, #cg-menu_tool").removeClass("cg-display");
    $(".cg-menu_ul").animate
      ({
        "left":'-100vw'
      }, 350);
  });
  $(".cg-main_li_out").hover(function(){
      $(".cg-menu_tool, #cg-menu_tool").removeClass("cg-display");
  });
  $(".cg-main_li_out").click(function(){
      $(".cg-menu_tool, #cg-menu_tool").removeClass("cg-display");
  });
  // HYPERLINKS
  $('.cg-main_li').click(function() {
    $('.cg-main_li').removeClass('cg-main_li_active');
    $(this).addClass('cg-main_li_active');
    $('.cg-main_li_tool').removeClass('cg-main_li_active');
  });
  $('.cg-li_section_form').click(function() {
    $('.cg-li_section_form').removeClass('cg-li_section_form_active');
    $(this).addClass('cg-li_section_form_active');
  });
  $('.cg-profile_body_li').click(function() {
    $('.cg-profile_body_li').removeClass('cg-profile_body_li_active');
    $(this).addClass('cg-profile_body_li_active');
  });
  //CAROUSEL SECTION
  $("#evalua").click(function(){
    $(".cg-wrapper_profile_section_carousel").animate
      ({
        "marginLeft":'0%'
      }, 700);
      $(".cg_profile_section_integrations").css({"visibility":"hidden"});
      $(".cg_profile_section_edit_profile").css({"visibility":"hidden"});
      $(".cg_profile_section_delete").css({"visibility":"hidden"});
      $(".cg_profile_section_course").css({"visibility":"visible"});
  });
  $("#mis_integraciones").click(function(){
    $(".cg-wrapper_profile_section_carousel").animate
      ({
        "marginLeft":'-100vw'
      }, 700);
      $(".cg_profile_section_course").css({"visibility":"hidden"});
      $(".cg_profile_section_edit_profile").css({"visibility":"hidden"});
      $(".cg_profile_section_delete").css({"visibility":"hidden"});
      $(".cg_profile_section_integrations").css({"visibility":"visible"});
  });
  $("#editar_perfil").click(function(){
    $(".cg-wrapper_profile_section_carousel").animate
      ({
        "marginLeft":'-200vw'
      }, 700);
      $(".cg_profile_section_integrations").css({"visibility":"hidden"});
      $(".cg_profile_section_course").css({"visibility":"hidden"});
      $(".cg_profile_section_delete").css({"visibility":"hidden"});
      $(".cg_profile_section_edit_profile").css({"visibility":"visible"});
  });
  $("#eliminar_perfil").click(function(){
    $(".cg-wrapper_profile_section_carousel").animate
      ({
        "marginLeft":'-300vw'
      }, 700);
      $(".cg_profile_section_integrations").css({"visibility":"hidden"});
      $(".cg_profile_section_edit_profile").css({"visibility":"hidden"});
      $(".cg_profile_section_course").css({"visibility":"hidden"});
      $(".cg_profile_section_delete").css({"visibility":"visible"});
  });
  //POP UP
    //OPEN INTERACTIONS
      // REVEAL POP UP LOGIN
      $(".cg-log_on").click(function(){
          $(".cg-bg_popup").fadeIn("slow");
          $(".cg-login").fadeIn("slow");
          $(".cg-login").css({
            "display":'flex'
          });
      });
      //REVEAL POP UP EXCEPT LOGIN
      $(".cg-pop_trigger").click(function(){
          var id_pop;
          id_pop = $(this).attr("id");
          $(".cg-bg_popup").fadeIn("slow");
          $(".cg-popup").fadeOut("fast");
          $(".cg-" + id_pop).fadeIn("slow");
          $(".cg-" + id_pop).css({
            "display":'flex'
          });
      });
    // CLOSE INTERACTIONS
    $(".cg-close_pop").click(function(){
      $(".cg-bg_popup, .cg-popup, .cg-wrapper_popup").css({"display":'none'});
      $("#cg-popup, .cg-flex_pop").css({
          'height':""
        }).delay( 1000 );
      $(".cg-wrapper_form_sections").animate({
          "marginLeft":'0%'
        }, 1000);
      $('.cg-li_section_form').removeClass('cg-li_section_form_active');
      $('.cg-li_section_form:first-of-type').addClass('cg-li_section_form_active');
    });
});
// DISABLE AND ENABLE BODY SCROLL WHEN POPUP IS OPEN
$(document).ready(function(){
  var targetNodes         = $(".cg-popup");
  var MutationObserver    = window.MutationObserver || window.WebKitMutationObserver;
  var myObserver          = new MutationObserver (mutationHandler);
  var obsConfig           = { attributes : true, attributeFilter : ['style'] };
  // ADD A TARGET NODE TO THE OBESERVER. CAN ONLY ADD ONE NODE AT TIME
  targetNodes.each ( function () {
      myObserver.observe (this, obsConfig);
  } );
  function mutationHandler (mutationRecords) {
    var activate_scroll = true;
    $(".cg-popup").each(function( index ) {
      if($(this).css("display") != "none"){
        $('html, body').css({'overflow-y': 'hidden'});
        activate_scroll = false;
        return;
      }
    });
    if(activate_scroll){
      $('html, body').css({'overflow-y': 'auto'});
    }
  }
});

//BUTTON LOGIN
function log_in()
{
  $(".cg-log_on").fadeOut("slow", 
    function()
      {
        $(".cg-log_off").fadeIn("slow");
        $(".cg-bg_popup, .cg-popup, .cg-wrapper_popup").fadeOut("slow");
      }
    );
}
function log_off()
{
  $(".cg-log_off").fadeOut("slow", 
    function()
      {
        $(".cg-log_on").fadeIn("slow");
      }
    );
}

function form_section_a()
{
  $(".cg-wrapper_form_sections").animate({
    "marginLeft":'0%'
  }, 1000);
  $(".cg-register #cg-popup, .cg-register .cg-flex_pop").animate({
    "height":'29.5rem'
  }, 300);
  $('.cg-li_section_form').removeClass('cg-li_section_form_active');
  $('.cg-li_section_form:nth-of-type(1)').addClass('cg-li_section_form_active');
}


function form_section_b()
{
  $(".cg-wrapper_form_sections").animate({
    "marginLeft":'-100%'
  }, 1000);
  $(".cg-register #cg-popup, .cg-register .cg-flex_pop").animate({
    "height":'25rem'
  }, 300);
  $('.cg-li_section_form').removeClass('cg-li_section_form_active');
  $('.cg-li_section_form:nth-of-type(2)').addClass('cg-li_section_form_active');
}

function form_section_c()
{
  $(".cg-wrapper_form_sections").animate({
    "marginLeft":'-200%'
  }, 1000);
  $(".cg-register #cg-popup, .cg-register .cg-flex_pop").animate({
    "height":'24rem'
  }, 300);
  $('.cg-li_section_form').removeClass('cg-li_section_form_active');
  $('.cg-li_section_form:nth-of-type(3)').addClass('cg-li_section_form_active');
}

$(document).ready(function () {
  //FADE IN WELCOME STUFF
  var divs = $('.cg-fade_effect');
  $(window).on('scroll', function() {
     var st = $(this).scrollTop();
     divs.css({ 'opacity' : (1 - st/300) });
  });
  //BUTTON RED IF SECTION PAGE IS OPEN
  if ($(document).find(".cg-views, .cg-goto_public").length == 0) 
  { 
  }
  else
  {
    $('.cg-log_on').addClass('cg_button_different');
    $('.cg-log_off').addClass('cg_button_different');
    $('#cg-navbar_main').removeClass('cg-navbar_main');
    $('#cg-navbar_main').addClass('cg-navbar_main_2');
    $('#cg-menu_tool').removeClass('cg-menu_tool_bottom');
    $('#cg-menu_tool').removeClass('cg-menu_tool');
    $('#cg-menu_tool').addClass('cg-menu_tool_2');
    $('.cg-log_on').addClass('cg_button_different');
    $('.cg-log_off').addClass('cg_button_different');
    $('.cg-nav_mobile').addClass('cg-nav_mobile_top');
    $('.cg-nav_mobile').removeClass('cg-nav_mobile_bottom');
    $('.cg-log_on').addClass('cg_button_different');
    $('.cg-log_off').addClass('cg_button_different');
  }
  //BUTTON RED IF SECTION PAGE IS OPEN
  if ($(document).find(".cg-wrapper-profile_body").length == 0) 
  { 
    $('.cg-nav_mobile').removeClass('cg-mobile_btn_except');
  }
  else
  {
    $('.cg-nav_mobile').addClass('cg-mobile_btn_except');
  }
  //SCROLL LISTENER TOOLS SECTION
  var waypoint = new Waypoint({
    element: document.getElementById('cg-webpoint_tools'),
    handler: function(direction) {
      $('.cg-tools-animation').addClass('animated fadeInDown');
      $('.cg-tools-animation_2').css(
        {'visibility': "visible"});
      $('.wrapper_flex_tools').css(
        {'visibility': "visible"});
      $('.cg-tools-animation_2').addClass('animated zoomIn');
    },
  })
  //SCROLL LISTENER VIDEO SECTION
  var waypoint = new Waypoint({
    element: document.getElementById('cg-webpoint_video'),
    handler: function(direction) {
      $('.cg-video-animation').addClass('animated fadeInDown');
      $('.cg-video-animation').css(
        {'visibility': "visible"});
      $('.cg-slider_video_ul').css(
        {'visibility': "visible"});
      $('.cg-video-animation_2').addClass('animated fadeInDown');
      $('.cg-slider_video_aside').css(
        {'visibility': "visible"});
      $('.cg-video-animation_3').addClass('animated fadeInLeft');
    },
  })
  //SMOOTH SCROLL
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});

//SLIDER
$(document).ready(function($) {
  $('.my-slider').unslider({
    keys: false,
    dots: true,
    fluid: true,
    speed: 2000,
    delay: 8000,
    autoplay: true,
  });
});

//SLIDER VIDEO




