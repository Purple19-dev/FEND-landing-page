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
  const mq = window.matchMedia("(max-width: 767px)");
  const viewportHeight = mq.matches
    ? window.screen.height
    : window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = mq.matches
    ? window.screen.width
    : window.innerWidth || document.documentElement.clientWidth;

  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= viewportHeight &&
    bounding.right <= viewportWidth
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
    const activeNav = document.querySelector(`a[href='#${section.id}']`);
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
      activeNav.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      activeNav.classList.remove("active");
    }
  }
}

/**
 * Events
 */
document.addEventListener("DOMContentLoaded", buildNav);
window.addEventListener("scroll", setActive);
