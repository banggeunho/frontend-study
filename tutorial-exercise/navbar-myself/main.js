const toggleButton = document.querySelector(".navbar__toggleButton");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    console.log("버튼 클릭");
    console.log(menu.classList);
    console.log(icons.classList);
});