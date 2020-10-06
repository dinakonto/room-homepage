function toggleMenu() {
  const menuBtn = $("#hamburger");
  const iconImg = $("#hamburger img");
  const iconLink = $("#hamburger a");
  const header = $("header");
  const body = $('body');

  header.toggleClass("show-menu");
  body.toggleClass('stop-scrolling')

  if (header.hasClass("show-menu")) {
    // Show 'close' icon
    iconImg.attr("src", "./images/icon-close.svg");
    iconImg.attr("alt", "Close");
    iconLink.attr("aria-label", "Close menu");
    // Show overlay
    header.after("<div class='overlay'></div>");
  } else {
    // Show 'hamburger' icon
    iconImg.attr("src", "./images/icon-hamburger.svg");
    iconImg.attr("alt", "Menu");
    iconLink.attr("aria-label", "Open menu");
    // Remove overlay
    $(".overlay").remove();
  }

}

function trapFocus(e) {
// Reference: https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
  const menuLinks = $("nav").find("a");
  const firstLink = menuLinks[0];
  const lastLink = menuLinks[menuLinks.length - 1];
  const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstLink) {
      lastLink.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastLink) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstLink.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
}

// Show/hide menu
$("#hamburger").click(function() {
  toggleMenu();
})

// Trap tab focus inside open mobile nav
$(document).keydown(function(e) {
  if ($("header").hasClass("show-menu")) {
    trapFocus(e);
  }
})
