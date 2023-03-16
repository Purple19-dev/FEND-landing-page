/**
 * Define Global Variables
 */
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * Helper Function
 */
function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Main Functions
 */
function buildNav() {
  for (let section of sections) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const navText = section.getAttribute("data-nav");
    link.href = `#${section.id}`;
    link.innerHTML = navText;
    link.classList.add("menu__link");
    listItem.appendChild(link);
    navList.appendChild(listItem);

    // Scroll to section on link click
    link.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function setActive() {
  for (let section of sections) {
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

/**
 * Events
 */
document.addEventListener("DOMContentLoaded", buildNav);
window.addEventListener("scroll", setActive);
