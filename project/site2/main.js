const links = document.querySelectorAll('.nav-links');

const changeClass = (elmnt) => {
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove('nav-links--active');
	}

	elmnt.classList.add('nav-links--active');
};

const slide1 = document.querySelector('#section-home');
const slide2 = document.querySelector('#section-mission');
const slide3 = document.querySelector('#section-idea');
const slide4 = document.querySelector('#section-contact');
const wrapper = document.querySelector('.main-wrapper');
let counter = 1;

const changeSlide = (currentSlide) => {
	if (currentSlide == 1) {
		wrapper.scrollTo(slide1.offsetLeft, 0);
		changeClass(links[0]);
		counter = 1;
	} else if (currentSlide == 2) {
		wrapper.scrollTo(slide2.offsetLeft, 0);
		changeClass(links[1]);
		counter = 2;
	} else if (currentSlide == 3) {
		wrapper.scrollTo(slide3.offsetLeft, 0);
		changeClass(links[2]);
		counter = 3;
	} else if (currentSlide == 4) {
		wrapper.scrollTo(slide4.offsetLeft, 0);
		changeClass(links[3]);
		counter = 4;
	}
};

document.addEventListener('keydown', (e) => {
	if (e.keyCode === 37) {
		counter--;
		if (counter < 1) counter = 1;
		changeSlide(counter);
	} else if (e.keyCode === 39) {
		counter++;
		if (counter > 4) counter = 4;
		changeSlide(counter);
	}
});

window.addEventListener('resize', () => {
	changeSlide(counter);
	console.log('hgi');
});
