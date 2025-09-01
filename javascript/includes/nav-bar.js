/* Setup mobile navigation functionality. */

export function setupMobileNavigationFunctionality() {
	const hamburgerMenu = document.getElementById("hamburger-icon");
	const navigation = document.getElementById("navigation");
	const navigationMenuItems = document.getElementsByClassName("nav-mobile-dropdown")[0];
	const screenBehindMobileNav = document.createElement("div");

	screenBehindMobileNav.classList.add("screen-behind-mobile-nav");

	/* Open mobile nav menu on hamburger button click. */
	hamburgerMenu.addEventListener("click", () => {
		navigation.className = "expand";
		navigationMenuItems.classList.remove("hide");
		navigation.after(screenBehindMobileNav);
	});

	/* If clicking outside of the nav menu, and if the nav menu is already open, close the mobile nav menu. */
	document.addEventListener("click", () => {
		if (navigation.clientHeight !== 0 && window.innerWidth <= 900) {
			navigation.className = "collapse";
			navigationMenuItems.classList.add("hide");
			screenBehindMobileNav.remove();
		}
	});

	/* If window grows larger than 700px wide, hide mobile nav dropdown menu. */
	function setBottomPaddingToZero() {
		if (window.innerWidth > 900) {
			navigation.className = "collapse";
			navigationMenuItems.classList.remove("hide");
			screenBehindMobileNav.remove();
		}
		if (window.innerWidth <= 900 && navigation.style.paddingBottom === "0%") {
			navigationMenuItems.classList.add("hide");
		}
	}

	window.onresize = setBottomPaddingToZero;
}
