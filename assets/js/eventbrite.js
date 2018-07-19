// Eventbrite
(function($) {
    $( document ).ready(function() {
        var url = 'https://oatysemfi0.execute-api.us-east-1.amazonaws.com/dev/events';

        $.ajax({
            url: url,
        }).done(function(data) {
            var dateOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
            };
            var events = data.events.map(function(event) {
                var date = parseISOLocal(event.start).toLocaleString('en-US', dateOptions);
                event.date = date + ' (your local time)';
                return event;
            });

            var template = window.Handlebars.compile($('#eventbrite-template').html());
            var html = template({events: events});
            $('#eventbrite').html(html);
        });
    });

    function parseISOLocal(s) {
        var b = s.split(/\D/);
        var date = new Date(Date.UTC(b[0], b[1]-1, b[2], b[3], b[4], b[5]));
        return date;
    }

})(jQuery);
