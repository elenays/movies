$('.find-movie').on('click', function () {
    let movie = $(".enter-movie").val();
    $('.enter-movie').val("");
    if (!movie)
        $('.movie__show').empty().append('<p class="movie__none">Enter movie!</p>');
    else {
        $.ajax({
            url: 'http://www.omdbapi.com/?t='+ movie +'&apikey=1622e12b',
            type: 'GET',
            dataType: 'json',
        })
            .done(function(data) {
                let templateScript = $('#movie').html();
                let template = Handlebars.compile(templateScript);
                $('.movie__show').empty().append(template(data));
            });
    }
    
})