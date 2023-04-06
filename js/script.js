$(document).ready(function () {
  $('.firstSlider__content-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
  $('.team__items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button id="prev" type="button" class="slick-arrow slider-arrow slider-prev"><img className='slider-prev__img' src="images/fullArrowLeft.svg" /></button>`,
    nextArrow: `<button id="next" type="button" class="slick-arrow slider-arrow slider-next"><img className='slider-next__img' src="images/fullArrowRight.svg" /></button>`
  });

  // Установите дату, до которой нужен таймер обратного отсчета
  var countDownDate = new Date().getTime() + 2.5*60*60*1000;

  // Обновляйте таймер каждую секунду
  var x = setInterval(function () {

    // Получите текущую дату и время
    var now = new Date().getTime();

    // Рассчитайте разницу между текущей датой и временем и датой и временем, до которых нужен таймер обратного отсчета
    var distance = countDownDate - now;

    // Рассчитайте количество дней, часов, минут и секунд
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновите элементы таймера на странице
    $('#timer .days').html(days);
    $('#timer .hours').html(hours);
    $('#timer .minutes').html(minutes);
    $('#timer .seconds').html(seconds);

    // Если таймер закончился, отобразите сообщение
    if (distance < 0) {
      clearInterval(x);
      $('#timer').html('Таймер завершен!');
    }
  }, 1000);
  

});