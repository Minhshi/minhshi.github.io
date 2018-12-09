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

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
