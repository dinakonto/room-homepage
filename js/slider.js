// Get total number of slides
const slidesText = $(".hero-text ul").children();
const slidesImages = $(".hero-images .images").children();
const numOfSlides = slidesText.length - 1;
let slideNum;

function init() {
  slideNum = 0;
  slidesText.eq(slideNum).addClass("current");
  slidesImages.eq(slideNum).addClass("current");
}

function changeSlide(dir) { // dir = Direction of click (prev/next)
  // Get current
  const oldSlides = $(".slide .current");

  // Change num
  if (dir === "next") {
    console.log("clicked next")
    slideNum++;
    if (slideNum > numOfSlides) {
      slideNum = 0;
    }
  } else if (dir === "prev") {
    console.log("clicked prev")
    slideNum--;
    if (slideNum < 0) {
      slideNum = numOfSlides;
    }
  }

  // Set new, remove old
  slidesText.eq(slideNum).addClass("current");
  slidesImages.eq(slideNum).addClass("current");
  oldSlides.removeClass("current");

  // Announce slide number to screenreaders
  $(".liveregion").text("Item " + (slideNum + 1) + " of " + (numOfSlides + 1));
}

init();

$("#slider-ctrl button").click(function() {
  changeSlide(this.id);
});
