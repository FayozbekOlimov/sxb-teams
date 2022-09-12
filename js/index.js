$(document).ready(function () {
  $('#visual-icon').click(function (e) {
    e.preventDefault();
    $('.header__theme').toggle();
  });

  $('#mobile-icon').click(function (e) {
    e.preventDefault();
    window.open("/", "example", "width=375px,height=576px,left=400,top=100");
  });

  $('.header__font-plus').click(function (e) {
    e.preventDefault();
    $('.header__font-minus').removeClass('disabled');
    if (parseInt($('body').css('font-size')) == 18) {
      $(this).addClass('disabled');
      return;
    }
    $('body, p, span, li, button, a, label, td, h1, h2, h3, h4, h5, h6').css('font-size', function () {
      return parseInt($(this).css('font-size')) + 1 + 'px';
    });
  });

  $('.header__font-minus').click(function (e) {
    e.preventDefault();
    $('.header__font-plus').removeClass('disabled');
    if (parseInt($('body').css('font-size')) <= 10) {
      $(this).addClass('disabled');
      return;
    }
    $('body, p, span, li, button, a, label, td, h1, h2, h3, h4, h5, h6').css('font-size', function () {
      return parseInt($(this).css('font-size')) - 1 + 'px';
    });
  });

  $('.header__font-default').click(function (e) {
    e.preventDefault();
    $('.header__font-plus').removeClass('disabled');
    $('.header__font-minus').removeClass('disabled');

    let delta = parseInt($('body').css('font-size')) - 14;
    $('body, p, span, li, button, a, label, td, h1, h2, h3, h4, h5, h6').css('font-size', function () {
      return parseInt($(this).css('font-size')) - delta + 'px';
    });
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
