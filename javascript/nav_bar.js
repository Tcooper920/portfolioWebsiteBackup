const hamburgerMenu = document.getElementById("hamburger-icon");
const navigation = document.getElementById("navigation");

// Open mobile nav menu on hamburger button click
hamburgerMenu.addEventListener("click", function () {
	navigation.style.paddingBottom = "24rem";
});

/* If clicking outside of the nav menu, and if the nav menu is already open, close the mobile nav menu */
document.addEventListener("click", function () {
	if (navigation.clientHeight != "0") {
		navigation.style.paddingBottom = "0%";
	}
});

/* If window grows larger than 700px wide, hide mobile nav dropdown menu */
function setBottomPaddingToZero() {
	if (window.innerWidth > 700) {
		navigation.style.paddingBottom = "0%";
	}
}

window.onresize = setBottomPaddingToZero;