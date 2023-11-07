$("h1").css("color", "red");
$("h1").css("font-size", "5rem");

$(document).keydown(function (event) {
  $("h1").text(event.key);
});
