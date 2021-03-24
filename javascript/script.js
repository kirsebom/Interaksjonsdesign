// Aninmation on the logo

const logo = document.querySelector(".logo");
const logoString = logo.textContent;
const split = logoString.split("");
logo.textContent = "";

for (let i = 0; i < logoString.length; i++) {
	logo.innerHTML += "<span>" + split[i] + "</span>";
}

let char = 0;
let timer = setInterval(addClass, 50);

function addClass() {
	const span = logo.querySelectorAll("span")[char];
	span.classList.add("text-animation");
	char++;
	if (char === split.lenght) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}
