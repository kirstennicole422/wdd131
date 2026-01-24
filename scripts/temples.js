// on click 


document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".nav-menu");
    const hamburgerButton = document.querySelector(".hamburger-button");
    hamburgerButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        // hamburgerButton.classList.toggle("open");
        if (navigation.classList.contains("open")) {
            hamburgerButton.textContent = "✖";
        }
        else {
            hamburgerButton.textContent = "☰";
        }
    });
});