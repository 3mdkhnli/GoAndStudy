$('.header_carousel').carousel({
    interval: 4000
})

function set_header_carousel() {
    let carousel_item_count = $('.header_carousel').find('.carousel-item').length;
    let item_width = $('.header_carousel').find('.carousel-item').width();
    for(let i = 0; i < carousel_item_count; i++) {
        $('.header_carousel .timer_line').append("<div class='line'></div>");
    }
    $('.line').css('width', (item_width / carousel_item_count) + "px")
}

set_header_carousel();
