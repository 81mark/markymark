document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
	const number = document.querySelector('input[type="number"]').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

	xhr.onload = function() {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText);

			let output = '';

			if (response.type === 'success') {
				response.value.forEach(res => {
					output += `<p>${res.joke}</p>`;
				});
			} else {
				output += '<p>Something went wrong</p>';
			}

			document.querySelector('.jokes').innerHTML = output;
			// console.log(response.value[1].joke);
		}
	};

	xhr.send();

	e.preventDefault();
}
