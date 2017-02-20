$(document).ready(function(){
  // TRIGGER MOBILE MENU
  $(".cg-nav_mobile").click(function(){
    $(".cg-menu_ul").animate
      ({
        "left":'0'
      }, 700);
    });
  $(".cg-menu_ul_close").click(function(){
    $(".cg-menu_ul").animate
      ({
        "left":'-100vw'
      }, 350);
    });
  // TRIGGER TOOL MENU
  $(".cg-main_li_tool").click(function(){
    if($(".cg-menu_tool").hasClass("display"))
        {
          $(".cg-menu_tool").removeClass("display")
        }
    else{
          $(".cg-menu_tool").addClass("display")
        }
  });
  $(".cg-menu_tool").mouseleave(function(){
      $(".cg-menu_tool").removeClass("display")
  });
  $(".cg-tool_li").click(function(){
    $(".cg-menu_tool").removeClass("display");
    $(".cg-menu_ul").animate
      ({
        "left":'-100vw'
      }, 350);
  });
  $(".cg-main_li_out").hover(function(){
      $(".cg-menu_tool").removeClass("display");
  });
  $(".cg-main_li_out").click(function(){
      $(".cg-menu_tool").removeClass("display");
  });
  // HYPERLINKS
  $('.cg-main_li').click(function() {
    $('.cg-main_li').removeClass('cg-main_li_active');
    $(this).addClass('cg-main_li_active');
  });
  // BUTTON LOGIN
  $(".cg-button_a > span").click(function(){
    if($(".cg-button_a").hasClass("cg-log_on"))
    {
      $(".cg-button_a").removeClass("cg-log_on");
      $(".cg-button_a").addClass("cg-log_off");
      $(".cg-log_off figure, .cg-log_off span").empty();
      $(".cg-log_off figure").append("<i class='fa fa-sign-in' aria-hidden='true'></i>");
      $(".cg-log_off span").append("Ingresar");
    }
    else
    {
      $(".cg-button_a").removeClass("cg-log_off");
      $(".cg-button_a").addClass("cg-log_on");
      $(".cg-log_on figure, .cg-log_on span").empty();
      $(".cg-log_on figure").append("<i class='fa fa-user' aria-hidden='true'></i>");
      $(".cg-log_on span").append("<i class='fa fa-power-off' aria-hidden='true'></i>");
    }
  });
});


