
const nav = document.querySelector("nav");
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    nav.style.transform = "translateY(-100px)";
  } else {
    nav.style.transform = "translateY(0)";
  }

  lastScrollPosition = currentScrollPosition;
});



