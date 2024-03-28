const hamburgerMenu = document.getElementById("hamburger-icon");
const navigation = document.getElementById("navigation");
const screenBehindMobileNav = document.createElement("div");

screenBehindMobileNav.classList.add("screen_behind_mobile_nav");

// Open mobile nav menu on hamburger button click
hamburgerMenu.addEventListener("click", () => {
	navigation.style.paddingBottom = "24rem";
	navigation.after(screenBehindMobileNav);
});

/* If clicking outside of the nav menu, and if the nav menu is already open, close the mobile nav menu */
document.addEventListener("click", () => {
	if (navigation.clientHeight != "0") {
		navigation.style.paddingBottom = "0%";
		screenBehindMobileNav.remove();
	}
});

/* If window grows larger than 700px wide, hide mobile nav dropdown menu */
function setBottomPaddingToZero() {
	if (window.innerWidth > 700) {
		navigation.style.paddingBottom = "0%";
		screenBehindMobileNav.remove();
	}
}

window.onresize = setBottomPaddingToZero;