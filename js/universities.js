let ww = $(window).outerWidth();
if(ww <= 767) {
    $('.universities_content label:nth-child(1) input').attr('placeholder', 'Ölkə');
    $('.universities_content label:nth-child(2) input').attr('placeholder', 'Universitet');
} else {
    $('.universities_content label:nth-child(1) input').removeAttr('placeholder');
    $('.universities_content label:nth-child(2) input').removeAttr('placeholder');
}

$(window).resize(function() {
    let ww2 = $(window).outerWidth();
    if(ww2 <= 767) {
        $('.universities_content label:nth-child(1) input').attr('placeholder', 'Ölkə');
        $('.universities_content label:nth-child(2) input').attr('placeholder', 'Universitet');
    } else {
        $('.universities_content label:nth-child(1) input').removeAttr('placeholder');
        $('.universities_content label:nth-child(2) input').removeAttr('placeholder');
    }
});

$('#uni_carousel').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    margin: 10,
    responsive:{
        0:{
            items:1
        }
    }
})

var owl4 = $('#uni_carousel');
owl4.owlCarousel();
// Go to the next item
$('.uni_next').click(function() {
    owl4.trigger('next.owl.carousel');
})
// Go to the previous item
$('.uni_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl4.trigger('prev.owl.carousel', [300]);
})

$('#summer_carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:3
        },
        767:{
            items:4
        }
    }
})


var summer_owl = $('#summer_carousel');
summer_owl.owlCarousel();
// Go to the next item
$('.summer_next').click(function() {
    summer_owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.summer_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    summer_owl.trigger('prev.owl.carousel', [300]);
})
