// Small helpers used on every page. No libraries needed.

// 1. Mobile menu: show/hide the nav when "Menu" is tapped
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.textContent = isOpen ? "Close" : "Menu";
  });

  // Close the menu after a link is tapped
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
      toggle.textContent = "Menu";
    })
  );
}

// 2. Keep the year in the footer up to date automatically
document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
