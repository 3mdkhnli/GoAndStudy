$('.more').on('click', function() {
	let parent = $(this).parent();
	let title = parent.find('.item_title').text();
	let text = parent.find('.text').text();
	let icon = parent.find('.item_icon').css('background-image');
	let opened = $('.services .opened');
	if(opened.css('display') != 'none') {
		opened.slideUp(200);
		setTimeout(() => {  
			$('.services .item').each(function() {
				$(this).show(200).css('display', 'flex');
			});
		}, 200);
		setTimeout(() => {
			opened.find('.item_icon').css('background-image', icon);
			opened.find('.item_title').text(title);
			opened.find('.text').text(text);
			setTimeout(() => {  
				$(this).parent().hide(200);
			}, 200);
			setTimeout(() => {  
				opened.slideDown(200).css('display', 'flex');
			}, 400);
		}, 200);
	} else {
		opened.find('.item_icon').css('background-image', icon);
		opened.find('.item_title').text(title);
		opened.find('.text').text(text);
		$(this).parent().hide(200);
		setTimeout(() => {  
			opened.slideDown(200).css('display', 'flex');
		}, 200);
	}
});

$('.opened_more').on('click', function() {
	$(this).parent().slideUp(200);
	setTimeout(() => {  
		$('.services .item').each(function() {
			$(this).show(200).css('display', 'flex');
		});
	}, 200);
});