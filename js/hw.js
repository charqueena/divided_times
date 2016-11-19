$(document).ready(function() {
  // Step 1: On click of the first link, slide down the ID of "slide-down"

  // $(".international").on("click", function (event) { event.preventDefault();
    $('#primary-nav > ul > li').click(function(e) { e.preventDefault();

      if ($(this).hasClass("active")) {
        $("#primary-nav li").removeClass("active");
        $("#slide-down").slideUp();
      } else {

        $("#international-drop").show();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").hide();
        $("#blogs-drop").hide();


        $("#primary-nav li").siblings('li').slideDown();

        $("#slide-down").slideDown();
        $("#primary-nav li").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
