// Email sign-up
(function ($) {
    $('#signup-button').click(function () {
        var email = $('#email').val();
        if (!email) {
            $('#validation-message').show();
        } else {
            var payload = {
                email_address: email,
                list_id: "454d5bfc-2a80-11e9-a3c9-06b79b628af2"
            }
            console.log('post payload', payload);

            axios.post('https://s87yuzk0s8.execute-api.us-east-1.amazonaws.com/dev/mailchimp/add', payload)
                .then(response => {
                    console.log('response', response);
                    $('#signup-box').hide();
                    $('#email-ty').text(email);
                    $('#thankyou-message').show();
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'mail',
                        eventAction: 'signup',
                        eventLabel: 'MCT1'
                    });
                })
                .catch(err => console.log(err));
        }
    });

    $('#email').keyup(function () {
        if ($('#email').val()) {
            $('#validation-message').hide();
        }
    });
    $('#thankyou-message a').click(function (event) {
        event.preventDefault();
        $('#thankyou-message').hide();
        $('#email').val('');
        $('#signup-box').show();
    });

})(jQuery);
