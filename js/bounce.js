$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('.header-section').addClass('black');
    }
    else {
        $('.header-section').removeClass('black');
    }
})