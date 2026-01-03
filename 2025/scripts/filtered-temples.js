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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Centennial, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-colorado-temple-lds-845690-wallpaper.jpg"    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2011, October, 1",
        area: 85084,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_f5579d41-7344-4498-a589-4017ba5fcc91.jpg"    }
];

function createCard(temples) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ""; // clear old cards first
    for (let i = 0; i < temples.length; i++) {
        const card = document.createElement("card");
        document.getElementById("temple-container").appendChild(card);
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        img.src = temples[i].imageUrl;
        img.alt = `Image of ${temples[i].templeName}`;
        img.setAttribute('loading', "lazy");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated)
        card.appendChild(area);
        card.appendChild(img);

        document.getElementById("temple-container").appendChild(card);
        name.append(temples[i].templeName);
        location.append(`Location: ${temples[i].location}`);
        dedicated.append(`Dedicated: ${temples[i].dedicated}`)
        area.append(`Area: ${temples[i].area} sq ft`)
    }
}
            
// createCard(temples);

function showAllTemples() {
    createCard(temples);
}

function showOldTemples() {
    const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    createCard(filtered);
}

function showNewTemples() {
    const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    createCard(filtered);
}

function showLargeTemples() {
    const filtered = temples.filter(t => t.area > 90000);
    createCard(filtered);
}

function showSmallTemples() {
    const filtered = temples.filter(t => t.area < 10000);
    createCard(filtered);
}

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = event.target.textContent.toLowerCase();

        switch (filter) {
            case "home":
                showAllTemples();
                break;
            case "old":
                showOldTemples();
                break;
            case "new":
                showNewTemples();
                break;
            case "large":
                showLargeTemples();
                break;
            case "small":
                showSmallTemples();
                break;
        }
    });
});

showAllTemples();

