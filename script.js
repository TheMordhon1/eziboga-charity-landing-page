let rellax = new Rellax('.rellax');

// Accordion
$(".header").click(function () {
  $(".accordion-item").removeClass("active");
  $(this).parent().addClass("active");
  $(".icon").text("+");
  $(this).children(".icon").text("-")
});