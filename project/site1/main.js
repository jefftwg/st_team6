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
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove('link--active');
		links[i].dataset.active = 'false';
	}

	elmnt.classList.add('link--active');
	elmnt.dataset.active = 'true';
};

const slide1 = document.querySelector('#hero-section');
const slide2 = document.querySelector('#mission');
const slide3 = document.querySelector('#idea');
const slide4 = document.querySelector('#service');
const wrapper = document.querySelector('.wrapper');
const links = document.querySelectorAll('nav a');

const changeSlide = (direction) => {
	currentSlide += direction;

	if (currentSlide < 1) currentSlide = 1;
	if (currentSlide > 4) currentSlide = 4;

	console.log(currentSlide);

	if (currentSlide === 1) {
		wrapper.scrollTo(0, slide1.offsetTop);
		changeClass(links[0]);
	} else if (currentSlide === 2) {
		wrapper.scrollTo(0, slide2.offsetTop);
		changeClass(links[1]);
	} else if (currentSlide === 3) {
		wrapper.scrollTo(0, slide3.offsetTop);
		changeClass(links[2]);
	} else if (currentSlide === 4) {
		wrapper.scrollTo(0, slide4.offsetTop);
		changeClass(links[3]);
	}
};

// JQUERY

let currentSlide = 1;

$(() => {
	$(this).keydown((e) => {
		if (e.keyCode == 38) {
			changeSlide(-1);
			console.log('up');
		}

		if (e.keyCode == 40) {
			changeSlide(1);
			console.log('down');
		}
	});

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
