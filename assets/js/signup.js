// Email sign-up
(function($) {
    $('#signup-button').click(function() {
        var email = $('#email').val();
        if (!email) {
            $('#validation-message').show();
        } else {
            var payload = {
                email_address: email,
                list_id: "1218e6847e"
            }
            console.log('post payload', payload);

            axios.post('https://s87yuzk0s8.execute-api.us-east-1.amazonaws.com/dev/mailchimp/add', payload)
                .then(response => {
                    console.log('response', response);
                    $('#signup-box').hide();
                    $('#email-ty').text(email);
                    $('#thankyou-message').show();
                })
                .catch(err => console.log(err));
        }
    });

    $('#email').keyup(function() {
        if ($('#email').val()) {
            $('#validation-message').hide();
        }
    });
    $('#thankyou-message a').click(function(event) {
        event.preventDefault();
        $('#thankyou-message').hide();
        $('#email').val('');
        $('#signup-box').show();
    });

})(jQuery);
