const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const timeDisplay = document.getElementById('time-display');

function setDate() {
	const now = new Date();
	timeDisplay.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minDegrees = (minutes / 60) * 360 + 90;
	minuteHand.style.transform = `rotate(${minDegrees}deg)`;

	const hours = now.getHours();
	const hourDegress = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegress}deg)`;
}

setInterval(setDate, 1000);
