/* Main utilities to include on every webpage. */

import { setupMobileNavigationFunctionality } from "./includes/nav-bar.js";
import { scrollToTopFunctionality } from "./includes/scroll-to-top-btn.js";
import { insertEmailIntoNavBar } from "./includes/insert-nav-email.js";

setupMobileNavigationFunctionality();
scrollToTopFunctionality();
insertEmailIntoNavBar();
