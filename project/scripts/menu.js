document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".nav-menu");
    const hamburgerButton = document.querySelector(".hamburger-button");
    hamburgerButton.addEventListener("click", () => {
        navigation.classList.toggle("open-menu");
        if (navigation.classList.contains("open-menu")) {
            hamburgerButton.textContent = "✖";
        }
        else {
            hamburgerButton.textContent = "☰";
        }
    });
});