// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  fixedTop();
};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get header section
const home = document.getElementById("home");

// Get the offset position of the navbar
const fixed = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedTop() {
  if (window.pageYOffset >= home.offsetHeight - 200) {
    navbar.classList.add("fixedNav");
    navbar.classList.add("in-view");
  } else {
    navbar.classList.remove("fixedNav");
    navbar.classList.remove("in-view");
  }
}
