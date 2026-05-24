const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

/* Hamburger Toggle */
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});

/* Dynamic Footer Year */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* Last Modified Date */
document.getElementById("lastModified").textContent =
  document.lastModified;