let $ = require("jquery");

$( "button" ).on("click", function(){ 
  $( ".added-conveniences__list" ).slideToggle();
  $("#dd").text($("#dd").text()== "expand_more" ? "expand_less" : "expand_more");
});
