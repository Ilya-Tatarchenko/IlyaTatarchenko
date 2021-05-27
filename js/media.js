$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger, .media_header').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.media_link').click(function (event) {
       $('.header_burger, .media_header').toggleClass('active');
       $('body').toggleClass('lock');
    });
});