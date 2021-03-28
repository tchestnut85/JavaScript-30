const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
	// set a variable called inbetween
	let inBetween = false;

	// check if shiftkey is down
	// and check that they are checking input
	if (e.shiftKey && this.checked) {
		// loop over every checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			// if the current checkbox is the one just clicked or the last one clicked,
			// change inbetween to its opposite value
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log('checking!');
			}

			// if inbetween flag is set to true, checkboxes getting looped through will get checked off
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
