$(document).ready(function () {
  $('#visual-icon').click(function (e) {
    e.preventDefault();
    $('.header__theme').toggle();
  });

  $('.form-check-input').change(function (e) {
    e.preventDefault();
    if ($('#firstRadio').is(":checked")) {
      $('body').css('filter', 'grayscale(0)');
    }
    if ($('#secondRadio').is(":checked")) {
      $('body').css('filter', 'grayscale(1)');
    }
  });

  $('.header__lang-item').click(function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    dots: false
  });
});
