// RellaxJS Initial
let rellax = new Rellax(".rellax");

// Accordion
$(".header").click(function () {
  $(".accordion-item").removeClass("active");
  $(this).parent().addClass("active");
  $(".icon").text("+");
  $(this).children(".icon").text("-");
});

// Counter
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
    viewed = true;
    $(".value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3000,
            easing: "swing",
            step: function (now) {
              $(this).text(
                Math.ceil(now)
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
              );
            },
          }
        );
    });
  }
}

// Carousel
// Params
var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 2, // or 'auto'
    // spaceBetween: 10,
    centeredSlides: true,
    effect: "coverflow", // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true, // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1023: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    // Events
    on: {
      imagesReady: function () {
        this.el.classList.remove("loading");
      },
    },
  };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();
