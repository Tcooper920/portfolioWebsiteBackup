/* Close popup windows on first page load. */
document.location.href = "#";

/* Pause videos when "x" or [next] arrow buttons are clicked in pop-up. */
var numXButtons = document.querySelectorAll(
	".footer-x-button, .close, .forward-button, .back-button"
);
for (let z = 0; z < numXButtons.length; z++) {
	numXButtons[z].addEventListener("click", pauseAllVideos);
}
var vid = document.getElementsByTagName("video");

function pauseAllVideos() {
	for (var numVids = 0; numVids < vid.length; numVids++) {
		vid[numVids].pause();
	}
}

/* Animate scroll when "back to top" arrow button is clicked. */
document.querySelectorAll('a[href^="#top"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
