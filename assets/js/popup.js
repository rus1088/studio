$('.modal-toggle').click(function() {
  $('.modal').addClass('active');
  document.getElementsByTagName("body")[0].style.overflow="hidden";

});

$('.modal-close').click(function() {
  $('.modal').removeClass('active');
  document.getElementsByTagName("body")[0].style.overflow="overlay";
});