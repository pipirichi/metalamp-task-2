import $ from "jquery";

const slideToggle = $(".added-conveniences__toggle");
const conveniencesList = $(".conveniences-list");

slideToggle.on("click", function () {
  conveniencesList.slideToggle();
  slideToggle.text(slideToggle.text() == "expand_more" ? "expand_less" : "expand_more");
});