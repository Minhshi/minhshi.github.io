$(function() {
  $('.btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.container2').offset().top}, 500, 'linear');
  });
});




$(document).ready(function(){
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });
});

// $('.Count').each(function () {
//   var $this = $(this);
//   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
//     duration: 6000,
//     easing: 'swing',
//     step: function () {
//       $this.text(Math.ceil(this.Counter));
//     }
//   });
// });


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
