document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const closeMenu = document.querySelector(".close-menu");

  // Open the navigation menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  // Close the navigation menu
  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});