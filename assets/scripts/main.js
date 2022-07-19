$("#tabs li button").click(function () {
  var t = $(this).attr("data-location");

  if (!$(this).hasClass("active")) {
    //this is the start of our condition
    $("#tabs li button").removeClass("active");
    $(this).addClass("active");

    $("div").removeClass("active");
    $("div").removeClass("show");

    $('div [data-location="' + t + '"]').addClass("show");
    $('div [data-location="' + t + '"]').addClass("active");
  }
});
