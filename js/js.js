var options = {
  offset: 225
}

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.header', options);

$('.main-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  fade: true,
  cssEase: 'linear'
});



$('#clock').countdown('2018/03/14', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="countdown-item"><div class="countdown-title">%d</div> <div class="countdown-name">дня</div></div> '
    + '<div class="countdown-item"><div class="countdown-title">%H</div> <div class="countdown-name">часов</div></div> '
    + '<div class="countdown-item"><div class="countdown-title">%M</div> <div class="countdown-name">минут</div></div> '
    + '<div class="countdown-item"><div class="countdown-title">%S</div> <div class="countdown-name">секунд</div></div>'));
});

$('.hamburger-box').click(function(e) {
  var dropdown = $('.mobile-panel');
  if(dropdown.is(':hidden')){
    $(this).addClass('is-active')
    dropdown.show()
  }
  else{
    $(this).removeClass('is-active')
    dropdown.hide()
  }
});
$('.toggle-button').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(':hidden')){
    menu.show()
  }
  else{
    menu.hide()
  }
});


$(document).ready(function() {
  $('.p-card__tabs-item-1').on('click', function() {
    $('.p-card__tabs-item').removeClass('active');
    $(this).addClass('active')
    $('.p-card__tabs-block-1').show();
    $('.p-card__tabs-block-2').hide();
    $('.p-card__tabs-block-3').hide();
    $('.p-card__tabs-block-4').hide();
  });
  $('.p-card__tabs-item-2').on('click', function() {
    $('.p-card__tabs-item').removeClass('active');
    $(this).addClass('active')
    $('.p-card__tabs-block-2').show();
    $('.p-card__tabs-block-1').hide();
    $('.p-card__tabs-block-3').hide();
    $('.p-card__tabs-block-4').hide();
  });
  $('.p-card__tabs-item-3').on('click', function() {
    $('.p-card__tabs-item').removeClass('active');
    $(this).addClass('active')
    $('.p-card__tabs-block-3').show();
    $('.p-card__tabs-block-1').hide();
    $('.p-card__tabs-block-2').hide();
    $('.p-card__tabs-block-4').hide();
    $('.p-card__galery-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  });
  $('.p-card__tabs-item-4').on('click', function() {
    $('.p-card__tabs-item').removeClass('active');
    $(this).addClass('active')
    $('.p-card__tabs-block-4').show();
    $('.p-card__tabs-block-1').hide();
    $('.p-card__tabs-block-2').hide();
    $('.p-card__tabs-block-3').hide();
  });

  $('.p-support__item > span').on('click', function() {
    $(this).parent().children('.p-support__subquest').slideToggle();
  });
  $('.p-support__subitem > span').on('click', function() {
    $(this).parent().children('.p-support__subitem-otv').slideToggle();
    $(this).parent().toggleClass('active');
  });

  $('.page-buy__button').fancybox();
});