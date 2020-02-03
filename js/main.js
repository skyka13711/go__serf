

$(function () {
  new WOW().init();

  $('.header__slider-items').slick({
    infinite: true,
    fade: true,
    prevArrow: "<img src='img/top__arrows-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/top__arrows-right.svg' class='next' alt='2'>",
    asNavFor: '.slider__dots'
  });

  $('.slider__dots').slick({
    arrows: false,
    asNavFor: ' .header__slider-items',
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true
  });

  $('.surf__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='img/top__arrows-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/top__arrows-right.svg' class='next' alt='2'>",
    asNavFor: '.map__slider, .travel__slider-items,.sleep__slider-items,.shop__slider-items',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,

        }
      }, {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,

        }
      }, {
        breakpoint: 400,
        settings: {
          centerMode: false,
          slidesToShow: 1,

        }
      }]

  });

  $('.map__slider').slick({
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.surf__slider, .travel__slider-items,.sleep__slider-items,.shop__slider-items,.header__slider-items',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        }
      }, {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,

        }
      }, {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,

        }
      }, {
        breakpoint: 400,
        settings: {
          centerMode: false,
          slidesToShow: 1,

        }
      }]
  });








  $('.travel__slider-items').slick({
    infinite: true,
    prevArrow: "<img src='img/top__arrows-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/top__arrows-right.svg' class='next' alt='2'>",
    asNavFor: '.surf__slider, .map__slider,.sleep__slider-items,.shop__slider-items',
  });

  $('.sleep__slider-items').slick({
    infinite: true,
    prevArrow: "<img src='img/top__arrows-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/top__arrows-right.svg' class='next' alt='2'>",
    asNavFor: '.surf__slider, .map__slider, .travel__slider-items,.shop__slider-items',
  });


  $('.shop__slider-items').slick({
    infinite: true,
    prevArrow: "<img src='img/top__arrows-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/top__arrows-right.svg' class='next' alt='2'>",
    asNavFor: '.surf__slider, .map__slider, .travel__slider-items,.sleep__slider-items',
  });


  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"></div><div class="quantity-button quantity-down"><img src="img/minus.svg"></div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('input').on('change', function () {
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$ ' + summ);
  });

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$ ' + summ);

  $('.shop__surf-box__circle').on('click', function () {
    $(this).toggleClass('activ')
  });

  $('.burger').on('click', function () {
    $(this).toggleClass('burger-activ')
    $('.aside__menu').slideToggle('slow')
  })

  $('.aside__menu a').on('click', function (e) {
    if (window.innerWidth < 480) {
      $('.aside__menu').slideUp('slow')
      $('.burger').removeClass('burger-activ');
    }
    e.preventDefault();
    let section = $(this).attr('href'),
      h = $(section).offset().top
    scroll(h)
  })

  $('.down__arrow').on('click', function () {
    let h = $('#shop').offset().top
    scroll(h)
  })

  $('.up__arrow').on('click', function () {
    scroll(0)
  })

  function scroll(h) {
    $('html, body').animate({
      scrollTop: h
    }, 700)
  }

  $(window).on('scroll', function () {
    checkH()
    arrows()
  })

  function checkH() {
    let windowH = $(window).scrollTop(),
      clientH = $(window).height()
    if (windowH > clientH) {
      $('.up__arrow').css('display', 'block')
      $('.arrows__inner').css('left','135px')

    }
    else {
      $('.down__arrow').css('display', 'block')
      $('.up__arrow').css('display', 'none')
      $('.arrows__inner').css('left','200px')

    }

  }
  function arrows() {
    mainH = window.pageYOffset,
      end = $('#shop').offset().top;
    if (mainH > end) {
      $('.down__arrow').css('display', 'none')
    }
    else {
      $('.down__arrow').css('display', 'block')
  }
  }

  checkH()


});


