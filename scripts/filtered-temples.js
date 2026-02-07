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
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_070ac208-d163-4faa-8123-c583b099c319.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple01.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Centennial, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl: "lesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-temple-lds-766966-wallpaper.jpg"
    },  
];

// document.querySelector("main").innerHTML("temple-card");
// document.querySelector(".templeCard").innerHTML("test fish");
// let templeCard = ""
// for (let i in temples) {
//     // change from write to DOM modification
//     templeCard += temples[i].templeName;
//     console.log(temples[i].location);
//     console.log(temples[i].dedicated);
//     console.log(temples[i].area);
//     // figure out how to make image work
//     console.log(temples[i].imageURL);
// }

for (let i in temples) {
    let templeCard = ""
    // change from write to DOM modification
    templeCard += temples[i].templeName;
    templeCard += temples[i].location;
    templeCard += temples[i].dedicated;
    templeCard += temples[i].area;
    // figure out how to make image work
    // templeCard += temples[i].imageURL;
    classList.add
    document.querySelector("main").append(templeCard);
}


// Loop through the array and create "temple cards" for each temple by displaying:
// The name of the temple.
// The location of the temple.
// The date the temple was dedicated.
// The total area of the temple in square feet.
// The provided image of the temple(an absolute address), making sure to include an appropriate alt value such as the name of the temple.
// Use native lazy loading for each temple image.


// Respond to the main navigation menu items by filtering and displaying the temples as follows:
// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.
