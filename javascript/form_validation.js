// Contact form validation

const form = document.getElementById("email_form");
const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
	let messages = [];

	if (name.value === "" || name.value == null) {
		messages.push("<span class='error_message'>Please enter your name.</span>");
	}

	if ((/^[^@]+@\w+(\.\w+)+\w$/.test(email.value)) == false) {
		messages.push("<span class='error_message'>Please enter a valid email.</span>");
	}

	if (message.value === "" || message.value == null) {
		messages.push("<span class='error_message'>Please enter a message.</span>");
	}

	if (messages.length > 0) {
		e.preventDefault();
		errorElement.innerHTML = messages.join("");
	}
});

