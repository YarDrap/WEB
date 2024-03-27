const menuEl = document.querySelector(".menu");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
	menuEl.classList.toggle("menu--open")
	hamburgerEl.classList.toggle("hamburger--open")
});

menuEl.addEventListener("click", () => {
	menuEl.classList.remove("menu--open")
	hamburgerEl.classList.remove("hamburger--open")
});