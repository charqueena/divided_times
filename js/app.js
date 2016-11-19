$(document).ready(function() {

  // Step 1: On click of the first link, slide down the ID of "slide-down"

  $(".international").on("click", function (event) { event.preventDefault();

    if ($(this).hasClass("active")) {
        $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();
    } else {

      $("#international-drop").show();
      //.css(display, block);
      $("#politics-drop").hide();
      $("#business-drop").hide();  $("#technology-drop").hide();  $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
        $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

    }
  });

  $(".politics").on("click", function (event) { event.preventDefault();

    if ($(this).hasClass("active")) {
        $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();

    } else {

      $("#international-drop").hide();
      //.css(display, block);
      $("#politics-drop").show();
      $("#business-drop").hide();  $("#technology-drop").hide();  $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
        $("#primary-nav li").removeClass("active");
      $(this).addClass("active");
// google hide dom elements of the level in jquery
    }
  });

  $(".business").on("click", function (event) { event.preventDefault();


    if ($(this).hasClass("active")) {
        $("#primary-nav li").removeClass("active");
      $("#slide-down").slideUp();

    } else {

      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").show();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
        $("#primary-nav li").removeClass("active");
      $(this).addClass("active");
    }
  });

    $(".technology").on("click", function (event) { event.preventDefault();


      if ($(this).hasClass("active")) {
          $("#primary-nav li").removeClass("active");
        $("#slide-down").slideUp();

      } else {

        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").show();
        $("#culture-drop").hide();
        $("#blogs-drop").hide();

        $("#slide-down").slideDown();
          $("#primary-nav li").removeClass("active");
        $(this).addClass("active");

      }
    });

    $(".culture").on("click", function (event) { event.preventDefault();


      if ($(this).hasClass("active")) {
          $("#primary-nav li").removeClass("active");
        $("#slide-down").slideUp();

      } else {

        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").show();
        $("#blogs-drop").hide();

        $("#slide-down").slideDown();
          $("#primary-nav li").removeClass("active");
        $(this).addClass("active");

      }
    });

    $(".blogs").on("click", function (event) { event.preventDefault();


      if ($(this).hasClass("active")) {
          $("#primary-nav li").removeClass("active");
        $("#slide-down").slideUp();

      } else {

        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#business-drop").hide();
        $("#technology-drop").hide();
        $("#culture-drop").hide();
        $("#blogs-drop").show();

        $("#slide-down").slideDown();
          $("#primary-nav li").removeClass("active");
        $(this).addClass("active");

      }
    });


});
