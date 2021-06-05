// grab everything we need
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// add eventlisteners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});