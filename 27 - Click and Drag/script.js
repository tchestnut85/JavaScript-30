const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function grabSlider(e) {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
}

function moveSlider(e) {
	if (!isDown) return; // stop function from running
	e.preventDefault(); // prevent text selection or other actions by user
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 2;
	slider.scrollLeft = scrollLeft - walk;
}

function stopSlide() {
	isDown = false;
	slider.classList.remove('active');
}

slider.addEventListener('mousedown', grabSlider);

slider.addEventListener('mouseleave', stopSlide);

slider.addEventListener('mouseup', stopSlide);

slider.addEventListener('mousemove', moveSlider);
