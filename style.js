$(function() {
  $('.btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.container2').offset().top}, 500, 'linear');
  });
});
