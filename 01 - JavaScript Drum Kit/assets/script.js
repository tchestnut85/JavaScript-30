function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	// stop the function from running if no audio for the key pressed
	if (!audio) return;

	// play the audio file
	audio.currentTime = 0;
	audio.play();

	// add the 'playing' class to the div being played
	key.classList.add('playing');
}

function removeTransition(event) {
	if (event.propertyName !== 'transform') return;

	// remove the 'playing' class
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
