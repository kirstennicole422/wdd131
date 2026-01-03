const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()} `;

lastModified.innerHTML = `Last modification: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const openMenu = document.querySelector(".dropdown");
    const navGroup = document.querySelector(".navigation");
    openMenu.addEventListener("click", () => {
        navGroup.classList.toggle("open");
        if (navGroup.classList.contains("open")) {
            openMenu.textContent = "❌";
        }
        else {
            openMenu.textContent = "☰";
        }
    });
});