$(function() {
  $('.see-more').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.container2').offset().top}, 500, 'linear');
  });
});

$(function() {
  $('.see-projects').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.container3').offset().top}, 500, 'linear');
  });
});

$(function() {
  $('.say-hello').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.container4').offset().top}, 500, 'linear');
  });
});

$(document).ready(function(){
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });
});

$(document).ready(function(){
$('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});

$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "contact.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
