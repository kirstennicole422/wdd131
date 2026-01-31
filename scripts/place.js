let temperature = document.querySelector(".temperature").textContent;
let windSpeed = document.querySelector(".wind-speed").textContent;
let windChill = "N/A";

if ((temperature <= 10) && (windSpeed > 4.8)) {
    windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector(".wind-chill").innerHTML = `${Math.round(windChill)} °C`;
} else {
    document.querySelector(".wind-chill").innerHTML = windChill;
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16));
}