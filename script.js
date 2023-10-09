const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
const sr = ScrollReveal({
  distance: "35px",
  duration: 2700,
  reset: true,
});
sr.reveal(".home-text", { delay: 350, origin: "top" });
sr.reveal(".home-img", { delay: 350, origin: "top" });
sr.reveal(".sub-service,.about,.contact,.portfolio,.service,.cta", {
  delay: 20,
  origin: "bottom",
});
