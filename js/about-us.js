$('#team_carousel').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    responsive:{
        0:{
            items:5
        }
    }
})

$('#team_carousel2').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
    responsive:{
        0:{
            items:1
        }
    }
})

var team_carousel = $('#team_carousel');
var team_carousel2 = $('#team_carousel2');
team_carousel.owlCarousel();
// Go to the next item
$('.team_next').click(function() {
    team_carousel.trigger('next.owl.carousel');
    team_carousel2.trigger('next.owl.carousel');
    $('#team_carousel .owl-stage').find('.active').find('.item').css('border-color', '#FFF');
    $('#team_carousel .owl-stage').find('.active').eq(1).find('.item').css('border-color', '#FFD129');
})
// Go to the previous item
$('.team_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    team_carousel.trigger('prev.owl.carousel', [300]);
    team_carousel2.trigger('prev.owl.carousel', [300]);
    $('#team_carousel .owl-stage').find('.active').find('.item').css('border-color', '#FFF');
    $('#team_carousel .owl-stage').find('.active').eq(1).find('.item').css('border-color', '#FFD129');
})

$('#team_carousel .owl-stage').find('.active').eq(1).find('.item').css('border-color', '#FFD129');
