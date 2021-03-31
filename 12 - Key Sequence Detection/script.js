const pressedKeys = [];
const secretCode = 'dragonborn';

window.addEventListener('keyup', e => {
	console.log(e.key);
	pressedKeys.push(e.key);
	pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);

	if (pressedKeys.join('').includes(secretCode)) {
		alert('secret code discovered!');
		cornify_add();
	}

	// console.log(pressedKeys);
});
