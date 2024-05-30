$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    center: true,
    autoplay: true,
    dots: false,
  });

  $('.owl-carousel-2').owlCarousel({
    items: 4,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: false,
  });
});
