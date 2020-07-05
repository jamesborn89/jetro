$(function(){


    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider__inner_min',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/next.png" alt=""></button>',
    });

    $('.slider__inner_min').slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider__inner',
      focusOnSelect: true,
      variableWidth: true,
      Infinity: true,
    });


    $('.header__btn').on('click', function(){
      $('.header__menu').slideToggle();
    });


  });