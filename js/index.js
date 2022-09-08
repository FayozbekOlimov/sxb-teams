$(document).ready(function () {
  $('#visual-icon').click(function (e) {
    e.preventDefault();
    $('.header__theme').toggleClass('d-none');
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
});