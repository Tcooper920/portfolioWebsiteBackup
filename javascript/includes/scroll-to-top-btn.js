/* Animate scroll when "back to top" arrow button is clicked. */

export function scrollToTopFunctionality() {
	document.querySelectorAll('a[href^="#top"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
}
