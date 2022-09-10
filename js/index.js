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

  $('.banner__carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    dots: false
  });

  $('.partners__carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    items: 6,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1024: {
        items: 4,
      },
      1160: {
        items: 6,
      },
    },
  });
});
