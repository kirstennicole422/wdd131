const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()} `;

lastModified.innerHTML = `Last modification: ${document.lastModified}`;

const windSpeed = document.querySelector(".wind-speed").innerHTML;
const temp = document.querySelector(".temp").innerHTML;

function calculateWindChill(windSpeed, temp) {
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temp * (windSpeed ** 0.16)))
}

if (windSpeed > 4.8 && temp <= 10) {
    document.querySelector("#wind-chill").innerHTML = `${calculateWindChill(windSpeed, temp)}° C`;
} else { document.querySelector("#wind-chill").innerHTML = "N/A"; }