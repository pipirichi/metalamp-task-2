import $ from "jquery";

const likeButton = $(".like-button");
const likeHeart = $(".like-button__heart");
const likeCount = $(".like-button__count");

likeButton.on("click", function () {
  $(this).toggleClass("like-button_active");
  likeHeart.text(likeHeart.text() == "favorite_border" ? "favorite" : "favorite_border");
  likeCount.text($(this).hasClass("like-button_active") ? +likeCount.text() + 1 : +likeCount.text() - 1);
});