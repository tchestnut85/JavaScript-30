const navBar = document.getElementById('main');
const navTop = navBar.offsetTop;

function fixNav() {
	// console.log(navTop, window.scrollY);
	if (window.scrollY >= navTop) {
		document.body.style.paddingTop = navBar.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', fixNav);
