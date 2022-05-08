import $ from "jquery";
import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider'

const rangeSlider = $(".slider__range-slider");
const sliderCount = $(".slider__count");

rangeSlider.ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  grid: false,
  hide_min_max: true,
  hide_from_to: true,
  min: 600,
  max: 15300,
  from: 5000,
  to: 10000,

  onStart: function (data) {
    sliderCount.text(`${data.from.toLocaleString("ru")}₽ - ${data.to.toLocaleString("ru")}₽`);
  },
  onChange: function (data) {
    sliderCount.text(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
  },
});