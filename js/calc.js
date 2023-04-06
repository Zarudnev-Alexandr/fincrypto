$(function () {
  let sliders = $(".slider");
  let sliderRisk = $(".slider-risk")
  let sliderSize = $(".slider-size")

  let inputs = $(".slider-input");
  let inputRisk = $(".slider-input-risk");
  let inputSize = $(".slider-input-size");

  let resultInputLoss = $("#result-input-loss");
  let resultInputEnter = $("#result-input-enter");
  let resultInputEnterVal = $("#result-input-enterVal");

  sliderRisk.slider({
    range: "min",
    min: 0,
    max: 100,
    value: inputRisk.val(),
    slide: function (event, ui) {
      inputRisk.val(ui.value);
      updateSliderValue(sliderRisk, ui.value);
      updateResult(ui.value);
    }
  });

  inputRisk.on("change", function () {
    let value = parseFloat($('#risk-input').val());
    if (isNaN(value)) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    sliderRisk.slider("value", value);
    updateSliderValue(sliderRisk, value);
    updateResult();
  });

  sliderSize.slider({
    range: "min",
    min: 0,
    max: 100,
    value: inputSize.val(),
    slide: function (event, ui) {
      inputSize.val(ui.value);
      updateSliderValue(sliderSize, ui.value);
      updateResult(ui.value);
    }
  });

  inputSize.on("change", function () {
    let value = parseFloat($('#size-input').val());
    if (isNaN(value)) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    sliderSize.slider("value", value);
    updateSliderValue(sliderSize, value);
    updateResult();
  });

  sliders.each(function (index) {
    let input = inputs.eq(index);
    let slider = $(this);
    slider.slider({
      range: "min",
      min: 0,
      max: 1000000,
      value: input.val(),
      slide: function (event, ui) {
        input.val(ui.value);
        updateSliderValue(slider, ui.value);
        updateResult(ui.value);
      }
    });
    
    input.on("change", function () {
      let value = parseFloat($(this).val());
      if (isNaN(value)) {
        value = 0;
      } else if (value < 0) {
        value = 0;
      } else if (value > 1000000) {
        value = 1000000;
      }
      slider.slider("value", value);
      updateSliderValue(slider, value);
      updateResult();
    });

    updateSliderValue(input, input.val());
  });

  function updateSliderValue(slider, value) {
    slider.find(".ui-slider-handle").text(value);
  }

  function updateResult() {
    sliders.each(function () {
      let loss = 0;
      let volumeEnter = 0;
      let volumeEnterVAl = 0;
      let deposit = 0;
      let enterPrice = 0;
      let stop = 0;
      let risk = 0;
      let size = 0;
      deposit = parseFloat($('#deposit-input').val());
      enterPrice = parseFloat($('#enterPrice-input').val());
      stop = parseFloat($('#stop-input').val());
      risk = parseFloat($('#risk-input').val());
      size = parseFloat($('#size-input').val());
      if (!isNaN(deposit) || !isNaN(enterPrice) || !isNaN(stop) || !isNaN(risk) || !isNaN(size)) {
        loss = (enterPrice - stop) / enterPrice * 100
        volumeEnter = deposit / loss * risk / size
        volumeEnterVAl = volumeEnter / enterPrice
      }
      resultInputLoss.val(loss);
      resultInputEnter.val(volumeEnter);
      resultInputEnterVal.val(volumeEnterVAl);
    });
    
  }
  updateResult();
});