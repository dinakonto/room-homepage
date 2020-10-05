// TODO:
// - Capture focus within open menu
// - Stop page scrolling when menu open
//      AND/OR
// - Fix header/menu to top

$("#hamburger").click(function() {
  $("header").toggleClass("show-menu")

  if ($("header").hasClass("show-menu")) {
    // Show 'close' icon
    $("#hamburger img").attr("src", "./images/icon-close.svg")
    $("#hamburger img").attr("alt", "Close")
    $("#hamburger a").attr("aria-label", "Close menu")
    // Show overlay
    $("header").after("<div class='overlay'></div>")
  }

  else {
    // Show 'hamburger' icon
    $("#hamburger img").attr("src", "./images/icon-hamburger.svg")
    $("#hamburger img").attr("alt", "Menu")
    $("#hamburger a").attr("aria-label", "Open menu")
    // Hide overlay
    $(".overlay").remove()
  }
})
