// Get total number of slides
const numSlides = $(".images").children().length;

function slideChange() {
  const currentSlide = $(".slide .current");
  let nextSlide;
  let prevSlide;

  // HIDE OLD SLIDE
  currentSlide.removeClass("current");

  // SHOW NEXT SLIDE
  if (event.target.id === "next") {
    if (!currentSlide.hasClass(numSlides)) {
      nextSlide = currentSlide.next();
    }
    // If it's the last slide, loop back around to the first
    else {
      nextSlide = $(".slide .1");
    };

    // Change slide
    nextSlide.addClass("current");
  }

  // SHOW PREVIOUS SLIDE
  else if (event.target.id === "prev") {
    if (!currentSlide.hasClass("1")) {
      prevSlide = currentSlide.prev();
    }
    // If it's the first slide, loop back around to the last
    else {
      prevSlide = $(".slide ." + numSlides);
    };

    // Change slide
    prevSlide.addClass("current");
  }
}
