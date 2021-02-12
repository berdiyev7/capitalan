function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

//$(document).ready(function () {
//   $('.header-burger').click(function (event) {
//      $('.header-burger,.header-menu').toggleClass('active');
//      $('.body').toggleClass('lock');
//   });
//});

//$(document).ready(function () {
//   $('.order__body').slick({
//      arrows: true,
//      dots: false,
//      slidesToShow: 3,
//      infinite: false,
//      swipe: false,
//      prevArrow: $('.slider__back'),
//      nextArrow: $('.slider__next'),
//      responsive: [
//         {
//            breakpoint: 1281,
//            settings: "unslick"
//         },
//         {
//            breakpoint: 768,
//            settings: {
//               slidesToShow: 2
//            }
//         },
//         {
//            breakpoint: 426,
//            settings: {
//               slidesToShow: 2
//            }
//         }
//      ]
//   });
//});

$(window).on('load resize', function () {
   if ($(window).width() < 979) {
      $('.order__body:not(.slick-initialized)').slick({
         centerMode: true,
         dots: true,
         infinite: false,
         speed: 500,
         slidesToShow: 1,
         arrows: true,
         centerMode: true,
         variableWidth: true,
         infinite: false,
         swipe: true,
         prevArrow: $('.order__arrow-left'),
         nextArrow: $('.order__arrow-right'),
      });
   } else {
      $(".order__body.slick-initialized").slick("unslick");
   }
});


$(function () {
   let Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      let dropdownlink = this.el.find('.faq__link');
      dropdownlink.on('click',
         { el: this.el, multiple: this.multiple },
         this.dropdown);
   };

   Accordion.prototype.dropdown = function (e) {
      let $el = e.data.el,
         $this = $(this),

         $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {

         $el.find('.faq__items').not($next).slideUp().parent().removeClass('open');
      }
   }

   let accordion = new Accordion($('.faq__menu'), false);
})