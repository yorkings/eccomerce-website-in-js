document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-toggle");
  const icon = document.getElementById("menu-icon");

  btn.addEventListener("click", () => {
    // Toggle icon class
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

    // Optional: Toggle menu visibility (if you're doing a responsive dropdown)
    const navList = document.getElementById("navbar-list");
    navList.classList.toggle("active");
  });
});