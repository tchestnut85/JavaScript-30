const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
	data => {
		console.log(data);

		speed.textContent = data.coords.speed;
		arrow.style.transform = `rotate(${data.coords.heading}deg)`;
	},
	err => {
		console.err(err);
		alert('You need to allow location access for this to work :D');
	}
);

// todo - Add Google Maps into this to implement a map feature with latitude and longitude
