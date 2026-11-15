// Native <details> keeps the mobile menu usable even without JavaScript.
const menu = document.querySelector(".mobile-navigation");
if (menu) {
  const summary = menu.querySelector("summary");
  const setState = () => {
    summary.setAttribute("aria-expanded", String(menu.open));
    summary.setAttribute("aria-label", menu.open ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("menu-open", menu.open);
    document.querySelectorAll("main, footer").forEach((element) => { element.inert = menu.open; });
  };
  const closeMenu = () => { menu.open = false; setState(); };
  setState();
  menu.addEventListener("toggle", setState);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    closeMenu();
    const destination = link.getAttribute("href");
    if (destination.startsWith("#")) {
      const target = document.querySelector(destination);
      if (target) { target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true }); }
    }
  }));
  document.querySelector(".brand").addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) { closeMenu(); summary.focus(); }
    if (event.key === "Tab" && menu.open) {
      const controls = [summary, ...menu.querySelectorAll("a")];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}
