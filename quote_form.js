console.log('LInked2');


$(document).ready(function() {
    $('FIND ME').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
            type: 'GET',
            dataType: 'application/json',
            data: {
                count: 1,
                cat: $('FIND ME').val(),
            },
            headers: {
                'X-Mashape-Key': 'PA5gaaE8UEmshYuhAFW5LkTmTD2np1zbxY9jsnO8S0cCvq0x6o'
            },
            complete: function(data) {
                var responseJSON = JSON.parse(data.responseText);
                $('FIND ME').html("\"" + responseJSON.quote + "\" - " + responseJSON.author);
            }
        });
    });
});





