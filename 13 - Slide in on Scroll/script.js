function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function () {
		const context = this,
			args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	// console.log(window);

	// loop over each image and determine where the image needs to be shown
	// use window.scrollY & window.innerHeight to tell how far you're scrolled down

	sliderImages.forEach(sliderImage => {
		// half way through the image
		const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
		console.log(slideInAt);

		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		console.log(imageBottom);

		// checks for if statement
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		console.log(isHalfShown, isNotScrolledPast);

		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));
