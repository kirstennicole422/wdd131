document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".nav-menu");
    const hamburgerButton = document.querySelector(".hamburger-button");
    const mainHero = document.querySelector(".home");
    hamburgerButton.addEventListener("click", () => {
        navigation.classList.toggle("open-menu");
        mainHero.classList.toggle("home-open-menu");
        if (navigation.classList.contains("open-menu")) {
            hamburgerButton.textContent = "✖";
        }
        else {
            hamburgerButton.textContent = "☰";
        }
    });
});