$(document).foundation()

$('.left-bar').hide();

if ($(window).scrollTop() > 310) $('.left-bar').fadeIn();

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 310) {
        $('.left-bar').fadeIn();
    } else {
        $('.left-bar').fadeOut();
    }
});
