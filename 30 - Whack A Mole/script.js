const holes = document.querySelectorAll('.hole');
const currentScore = document.querySelector('.score');
const scoreBoard = document.querySelector('.score-board');
const moles = document.querySelectorAll('.mole');
const savedScores = JSON.parse(localStorage.getItem('whack-a-mole scores')) || [];

let lastHole;
let timeUp;
let score = 0;

function randonTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		console.log('nope');
		return randomHole(holes);
	}

	lastHole = hole;
	return hole;
}

function peep() {
	const time = randonTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function startGame() {
	score = 0;
	currentScore.textContent = 0;
	timeUp = false;
	peep();
	setTimeout(() => {
		timeUp = true;
		saveScores();
	}, 2000);
}

function saveScores() {
	const name = window.prompt('To save your score, enter your name.');
	const currentScore = { name, score };

	if (name) {
		savedScores.push(currentScore);
		localStorage.setItem('whack-a-mole scores', JSON.stringify(savedScores));
	}
}

function bonk(e) {
	if (!e.isTrusted) return;
	score++;
	this.classList.remove('up');
	currentScore.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
