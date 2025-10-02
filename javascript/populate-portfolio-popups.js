/* Global variables */
const totalNumberOfPortfolioPieces = document.querySelectorAll("#responsive-figure-container .button").length;
const allUnloadedImageTags = document.querySelectorAll(".popup-content img");
const allPortfolioFigureTagLinks = document.querySelectorAll("a.button");
const numberOfFigureTagLinks = allPortfolioFigureTagLinks.length;
const allPortfolioForwardButtons = document.querySelectorAll("a.forward-link");
const allPortfolioBackwardButtons = document.querySelectorAll("a.back-link");
const numberOfForwardButtons = allPortfolioForwardButtons.length;
const numberOfBackwardButtons = allPortfolioBackwardButtons.length;

/* Close popup windows on first page load. */
document.location.href = "#";

/* Pause videos when "x" or [next] arrow buttons are clicked in pop-up. */
var numXButtons = document.querySelectorAll(".footer-x-button, .close, .forward-button, .back-button");
for (let z = 0; z < numXButtons.length; z++) {
	numXButtons[z].addEventListener("click", pauseAllVideos);
}
var vid = document.getElementsByTagName("video");

function pauseAllVideos() {
	for (var numVids = 0; numVids < vid.length; numVids++) {
		vid[numVids].pause();
	}
}

/*  Set image backgrounds to loading gif image until loaded. */
for (let i = 0; i < allUnloadedImageTags.length; i++) {
	allUnloadedImageTags[i].setAttribute("src", "images/loading_icon.gif");
}

/* Lazyload: Load images into pop-ups for each "figure" thumbnail that is clicked (no more than 12 per page). */
function loadImagesPopup(pieceNumber) {
	var artwork = document.getElementsByClassName("portfolio-piece-" + pieceNumber)[0];
	var imgEl = artwork.getElementsByTagName("img");

	for (var i = 0; i < imgEl.length; i++) {
		if (imgEl[i].getAttribute("data-src")) {
			imgEl[i].setAttribute("src", imgEl[i].getAttribute("data-src"));
			imgEl[i].removeAttribute("data-src");
		}
	}
}

/* Listen to all clicks on the document for each of the thumbnails that may be clicked (loop through all portfolio pieces). */
document.addEventListener(
	"click",
	function (event) {
		for (var counter = 0; counter <= totalNumberOfPortfolioPieces; counter++) {
			if (event.target.matches(".piece-" + counter)) {
				loadImagesPopup(counter);
			} else if (event.target.closest(".piece-" + counter)) {
				loadImagesPopup(counter);
			}
		}
	},
	false
);

document.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		for (let i = 0; i <= numberOfFigureTagLinks; i++) {
			if (event.target == allPortfolioFigureTagLinks[i]) {
				loadImagesPopup(i + 1);
			}
		}
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		for (let i = 0; i <= numberOfForwardButtons; i++) {
			if (event.target == allPortfolioForwardButtons[i]) {
				loadImagesPopup(i + 2);
			}
		}
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		for (let i = 0; i <= numberOfBackwardButtons; i++) {
			if (event.target == allPortfolioBackwardButtons[i]) {
				console.log(i);
				loadImagesPopup(i + 1);
			}
		}
	}
});
