const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
];

const bandList = document.getElementById('bands');

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

function makeList(listArray) {
	const displayBands = listArray.map((item, i) => `<li id='band-${i}'>${item}</li>`);
	bandList.innerHTML = displayBands.join('');
}

makeList(sortedBands);
