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
});