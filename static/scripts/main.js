function getMovies() {
    $('.movie').empty();
    movie = $(".enter-movie").val();
    $('.enter-movie').val("");
    DATAGLOBAL = movie;

    $.ajax({
         url: 'http://www.omdbapi.com/?t='+DATAGLOBAL+'&apikey=1622e12b',
         type: 'GET',
         dataType: 'json',
     })

    .done(function(data) {
        console.log(data);
        var templateScript = $('#movie').html();
        var template = Handlebars.compile(templateScript);
        $('.itemEntry').append(template(data));
    });

}