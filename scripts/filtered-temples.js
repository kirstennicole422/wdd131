// ADD FILTERS

// Respond to the main navigation menu items by filtering and displaying the temples as follows:
// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.

document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".nav-menu");
    const hamburgerButton = document.querySelector(".hamburger-button");
    hamburgerButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        if (navigation.classList.contains("open")) {
            hamburgerButton.textContent = "✖";
        }
        else {
            hamburgerButton.textContent = "☰";
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
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_070ac208-d163-4faa-8123-c583b099c319.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple01.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Centennial, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-temple-lds-766966-wallpaper.jpg"
    },
];

function createTempleCards(filteredTemples) {
    for (let i in filteredTemples) {
        // let cardContainer = document.querySelector(".card");
        let card = document.createElement("div");
        card.classList.add("card");
        let cardText = document.createElement("div");
        cardText.classList.add("card-text");
        
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        
        let templeName = document.createElement("h2");
        templeName.classList.add("name");
        templeName.innerHTML = `${temples[i].templeName}`;
        cardText.append(templeName);
        
        let location = document.createElement("p");
        location.classList.add("location");
        location.innerHTML = `Location: ${temples[i].location}`;
        cardText.append(location);
        
        let dedicated = document.createElement("p");
        dedicated.classList.add("dedication");
        dedicated.innerHTML = `Dedicated: ${temples[i].dedicated}`;
        cardText.append(dedicated);
        
        let area = document.createElement("p");
        area.classList.add("area");
        area.innerHTML = `Area: ${temples[i].area} sq ft`;
        cardText.append(area);
        
        card.append(cardText);
        let img = new Image();
        img.src = temples[i].imageUrl;
        img.alt = temples[i].templeName;
        img.loading = "lazy";
        // img.classList.add("img");
        imgContainer.append(img);
        
        card.append(imgContainer);
        // cardContainer.append(card);
        
        document.querySelector(".card-container").append(card);
    }
}

// function isNew() {
//     for (let i in temples) {
//         if (temples[i].dedicated.slice(0, 4) >= "2000") {
//             return temples[i];
//             // };
//         }
//         // return
//     }
// }

// createTempleCards(temples.filter(isNew));


function filterTemples() {
    let filteredTemples = [];
    for (let i in temples) {
        if (temples[i].dedicated.slice(0, 4) >= "2000") {
            filteredTemples.push(temples[i]);
            // };
        }
    }
    return filteredTemples;
}

createTempleCards(filterTemples());