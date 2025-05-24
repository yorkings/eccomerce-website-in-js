document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-toggle");
  const icon = document.getElementById("menu-icon");

  btn.addEventListener("click", () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    const navList = document.getElementById("navbar-list");
    navList.classList.toggle("active");
    const nav=document.getElementById("navbar");
    nav.classList.toggle("active")
  });
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active")); // remove from others
      link.classList.add("active"); // add to current
    });
  });
});
