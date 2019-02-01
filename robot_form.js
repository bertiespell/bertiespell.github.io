console.log('LInked');

$(document).ready(function() {
    $('#robot-form').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://robohash.p.mashape.com/index.php',
            type: 'GET',
            dataType: 'text/plain',
            data: {
                text: $('#robot-text').val()
            },
            headers: {
                'X-Mashape-Key': 'PA5gaaE8UEmshYuhAFW5LkTmTD2np1zbxY9jsnO8S0cCvq0x6o'
            },
            complete: function(data){
                var responseJSON = JSON.parse(data.responseText);
                console.log(responseJSON);
                $('.robot-answer').html("<img src=\"" + responseJSON.imageUrl + "\">");
            }
        });
    });
});





