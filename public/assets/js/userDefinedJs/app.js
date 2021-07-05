const fetch = require('node-fetch');
//get the form by its id
const form = document.querySelector('.contact-form');
let firstName = document.getElementById('inputFirstName');
let lastName = document.getElementById('inputLastName');
let email = document.getElementById('inputEmail');
let message = document.getElementById('message');

// const url = 'http://localhost:8080/';
const url =
	'https://us-central1-web-portfolio-318903.cloudfunctions.net/sendEmail';

//1.
form.addEventListener('submit', (event) => {
	event.preventDefault();
	main();
});

async function main() {
	console.log(firstName.value);
	console.log(lastName.value);
	console.log(email.value);
	console.log(message.value);

	const formData = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		message: message.value,
	};

	// let formData = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Estrada',
	// 	email: 'test@email.com',
	// 	message: 'Hello Sir',
	// };

	const otherPram = {
		headers: {
			'Content-type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(formData),
	};

	const res = await fetch(url, otherPram);
	const json = await res.text();
	console.log(json);
	alert('Your form was submitted!');
	form.reset();
}

// main();
