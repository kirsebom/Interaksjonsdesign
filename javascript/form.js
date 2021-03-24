const form = document.querySelector(".form-contact");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const formSent = document.querySelector("#form-sent");

function checkForm(event) {
	event.preventDefault();

	if (checkLength(name.value, 0)) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
	}

	if (checkLength(subject.value, 20)) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	if (checkEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
}

form.addEventListener("submit", checkForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function checkEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}

function displayMessage() {
	if (
		checkLength(name.value, 0) &&
		checkLength(subject.value, 12) &&
		checkEmail(email.value)
	) {
		alert("Your message has been sent");
		form.reset();
	} else {
		formSent.innerHTML = "";
	}
}

form.addEventListener("submit", displayMessage);
