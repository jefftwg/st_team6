const addHoverEffect = (elmnt) => {
	if (elmnt.dataset.active == 'false') {
		elmnt.classList.add('link--active');
	}
};

const removeHoverEffect = (elmnt) => {
	if (elmnt.dataset.active == 'false') {
		elmnt.classList.remove('link--active');
	}
};

const changeClass = (elmnt) => {
	const links = document.querySelectorAll('nav ul a');
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove('link--active');
		links[i].dataset.active = 'false';
	}

	elmnt.classList.add('link--active');
	elmnt.dataset.active = 'true';
};

// JQUERY

$(() => {
	$('.hero-pic').fadeIn(1000);

	$('header').delay(100).animate({
		left: '0'
	}, 1000, () => {
		$('header');
	});

	$('.main-text').delay(1200).animate({
		paddingLeft: 0,
		opacity: 1
	}, 1000, () => {
		$('.main-text').show();
	});

	$('.sub-text').delay(1500).animate({
		paddingLeft: '5px',
		opacity: 0.8
	}, 1000, () => {
		$('.sub-text').show();
	});
});
