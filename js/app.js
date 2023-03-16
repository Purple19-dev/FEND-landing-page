/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function inVeiwport(params) {
  const sectionBond = params.getBoundingClientRect();
  return (
    sectionBond.top >= 0 &&
    sectionBond.left >= 0 &&
    sectionBond.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    sectionBond.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navBar() {
  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const navText = section.dataset.nav;
    a.href = `#${section.id}`;
    a.textContent = navText;
    a.className = "menu__link";
    li.appendChild(a);
    //scrollSections(li, section);
    navList.appendChild(li);
  });
}

// Add class 'active' to section when near top of viewport
function setSectionActive() {
  sections.forEach((section) => {
    if (inVeiwport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event
function scrollSections(section) {
  li.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navBar();

// Scroll to section on link click

// Set sections as active
window.addEventListener("scroll", (event) => {
  setSectionActive();
});
