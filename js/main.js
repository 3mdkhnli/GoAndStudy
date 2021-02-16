for(var i = 0; i < $('.header .carousel').find('.carousel-item').length; i++) {
	$('.header .carousel .carousel-indicators').append('<li data-target="#carousel-1" data-slide-to="' + i+ '"></li>');
}

$('.header .carousel').find('li:nth-child(1)').addClass('active');

$('#news_carousel').owlCarousel({
    loop:true,
    dots: false,
    autoplay:true,
	autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768: {
        	items: 3
        },
        1200:{
            items:4
        }
    }
})

$('#students_carousel').owlCarousel({
    loop:true,
    dots: false,
    autoplay:true,
	autoplayTimeout:4000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        768: {
        	items: 3
        },
        1200:{
            items:4
        }
    }
})

$('#partners_carousel').owlCarousel({
    loop:true,
    dots: false,
    autoplay:true,
	autoplayTimeout:4000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:2
        },
        768: {
        	items: 4
        }
    }
})

var owl1 = $('#news_carousel');
owl1.owlCarousel();
// Go to the next item
$('.carousel_2_next').click(function() {
    owl1.trigger('next.owl.carousel');
})
// Go to the previous item
$('.carousel_2_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl1.trigger('prev.owl.carousel', [300]);
})

var owl2 = $('#students_carousel');
owl2.owlCarousel();
// Go to the next item
$('.carousel_3_next').click(function() {
    owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.carousel_3_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel', [300]);
})

var owl3 = $('#partners_carousel');
owl2.owlCarousel();
// Go to the next item
$('.carousel_4_next').click(function() {
    owl3.trigger('next.owl.carousel');
})
// Go to the previous item
$('.carousel_4_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl3.trigger('prev.owl.carousel', [300]);
})

// ;


$('.hamburger_button').on('click', function() {
	$('.hamburger').slideToggle(150);
});