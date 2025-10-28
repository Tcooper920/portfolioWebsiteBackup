/* In the nav bar, encode the email and decode it with JavaScript to protect the email address from bots */

export function insertEmailIntoNavBar() {
	const navBarItemContainer = document.querySelector(".contact-email");
	const encodedEmail = "Y29vcGVyZ2Rlc2lnbmVyQGdtYWlsLmNvbQ=="; // base64 encoding for my contact email
	const decodedEmail = atob(encodedEmail);
	const thisNavItem = document.createElement("a");

	thisNavItem.setAttribute("href", `mailto:${decodedEmail}`);
	thisNavItem.innerText = "Contact";
	navBarItemContainer.replaceChildren(thisNavItem);
}
