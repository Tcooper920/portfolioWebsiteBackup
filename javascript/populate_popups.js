// JavaScript Document
/* global $, document, jQuery, window */
jQuery(document).ready(function () {
  /* close popup windows (href anchor tags) when site is first visited or when the page is reloaded */
  document.location.href = "#";
	
  //////////////////////////////////////////////////////////// Set image backgrounds to loading gif image until loaded
  let allUnloadedImageTags = document.querySelectorAll(".popup img");
  
  for (let i = 0; i < allUnloadedImageTags.length; i++) {
	allUnloadedImageTags[i].setAttribute("src", "images/loading_icon.gif");
  }

  /////////////////////////////// Lazyload: Load images into pop-ups for each "figure" thumbnail that is clicked (no more than 12 per page)
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

  // Listen to all clicks on the document for each of the 12 thumbnails that may be clicked (loop through all 12 portfolio pieces)
  document.addEventListener("click", function (event) {
    for (var counter = 0; counter <= 12; counter++) {
      // If the event target doesn't match bail
      if (event.target.matches(".piece-" + counter)) {
        loadImagesPopup(counter);
      } else if (event.target.closest(".piece-" + counter)) {
        loadImagesPopup(counter);
      }
    }
  }, false);

  /* if user presses "enter" on a portfolio piece thumbnail */
  $("body a.button").keydown(function (event) {
    if (event.keyCode == 13) {
      var $this = $(this);
      for (var counter = 0; counter <= 12; counter++) {
        if ($this.index() === counter) {
          loadImagesPopup(counter + 1);
        }
      }
    }
  });

  /* if user presses "enter" on forward button in the popups */
  $("body a.forward-link").keydown(function (event) {
    if (event.keyCode == 13) {
      var currentSelectedLink = $("body a.forward-link").index(this);
      for (var counter = 0; counter <= 12; counter++) {
        if (currentSelectedLink === counter) {
          loadImagesPopup(counter + 2); // load next portfolio piece
        }
      }
    }
  });

  /* if user presses "enter" on back button in the popups */
  $("body a.back-link").keydown(function (event) {
    if (event.keyCode == 13) {
      var currentSelectedLink = $("body a.back-link").index(this);
      for (var counter = 0; counter <= 12; counter++) {
        if (currentSelectedLink === counter) {
          loadImagesPopup(counter + 1); //load previous portfolio piece
        }
      }
    }
  });

  ////////////////////////////////////////////////////////// Pause videos when "x" or [next] arrow buttons are clicked in pop-up	
  var numXButtons = document.querySelectorAll(".footer_x_button, .close, .forward_button, .back_button");
  for (var z = 0; z < numXButtons.length; z++) {
    numXButtons[z].addEventListener("click", pauseAllVideos);
  }
  var vid = document.getElementsByTagName("video");

  function pauseAllVideos() {
    for (var numVids = 0; numVids < vid.length; numVids++) {
      vid[numVids].pause();
    }
  }

  ///////////////////////////////////////////////////////// animate scroll when "back to top" arrow button is clicked
  document.querySelectorAll('a[href^="#top"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

});
