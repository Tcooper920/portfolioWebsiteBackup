// Contact form validation

const form = document.getElementById("email_form");
const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");
const errorElement = document.getElementById("error_container");

form.addEventListener("submit", (e) => {
	let errorMessages = [];
	let fieldsWithErrors = Array.from(document.getElementsByClassName("field_with_error_styling"));
	
	/* Remove all red styled fields (for fields with errors) */
	for (let i = 0; i < fieldsWithErrors.length; i++) {
		fieldsWithErrors[i].classList.remove("field_with_error_styling");
	}

	if (name.value === "" || name.value == null) {
		errorMessages.push("<span class='error_message'>Please enter your name.</span>");
		name.classList.add("field_with_error_styling");
	}

	if ((/^[^@]+@\w+(\.\w+)+\w$/.test(email.value)) == false) {
		errorMessages.push("<span class='error_message'>Please enter a valid email.</span>");
		email.classList.add("field_with_error_styling");
	}

	if (message.value === "" || message.value == null) {
		errorMessages.push("<span class='error_message'>Please enter a message.</span>");
		message.classList.add("field_with_error_styling");
	}

	if (errorMessages.length > 0) {
		e.preventDefault();
		errorElement.innerHTML = errorMessages.join("");
	}
});

