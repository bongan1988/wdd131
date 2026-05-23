const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // toggle icon
  menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// last modified
document.getElementById("lastModified").textContent = document.lastModified;