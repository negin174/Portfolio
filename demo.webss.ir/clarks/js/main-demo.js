$(function() {

    $('.theme-options').addClass('active');
    setTimeout(function(){
        $('.theme-options').removeClass('active');
    }, 5000);

    $('.theme-options .toggle-btn').on('click', function() {
        $('.theme-options').toggleClass('active');
    });

    $('.theme-color li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.site-color').attr('href', style_link);

        e.preventDefault();
    });
});
