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

// $("#contactForm").submit(function(event){
//     // cancels the form submission
//     event.preventDefault();
//     submitForm();
// });
// function submitForm(){
//     // Initiate Variables With Form Content
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var message = $("#message").val();

//     $.ajax({
//         type: "POST",
//         url: "contact.php",
//         data: "name=" + name + "&email=" + email + "&message=" + message,
//         success : function(text){
//             if (text == "success"){
//                 formSuccess();
//             }
//         }
//     });
// }
// function formSuccess(){
//     $( "#msgSubmit" ).removeClass( "hidden" );
// }

// $(document).ready(funcion(){
$("#contactform").submit(function (e) {
    e.preventDefault();
    var name = $("#cf-name").val();
    var email = $("#cf-email").val();
    var message = $("#cf-message").val();
    var dataString = 'name=' + name + '&email=' + email + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    }
    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    }
    else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }
    return false;
});

