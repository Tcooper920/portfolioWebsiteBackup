/* Main utilities to include on every webpage of the site. */

import { setupMobileNavigationFunctionality } from "./includes/nav-bar.js";
import { scrollToTopFunctionality } from "./includes/scroll-to-top-btn.js";
import { insertEmailIntoNavBar } from "./includes/insert-nav-email.js";

setupMobileNavigationFunctionality();
scrollToTopFunctionality();
insertEmailIntoNavBar();
