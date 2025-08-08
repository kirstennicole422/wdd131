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
const food = ["fish", "apples", "bananas", "oranges"];
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

// function createCard() {
//     let name = temples.templeName;
//     let location = temples.location;
//     let dedicated = temples.dedicated;
//     let area = temples.area;
//     let imageUrl = temples.imageUrl;
// };

// const newDiv = document.createElement("temple-card");
// const words = document.createTextNode('words to display');
// newDiv.appendChild(words);
// const element = document.getElementById("temple-container");
// // element.appendChild(card);
// document.body.insertBefore(newDiv, element);

// document.body.onload = addElement;

// function addElement() {
//     // create a new div element
//     const newDiv = document.createElement("div");

//     // and give it some content
//     const newContent = document.createTextNode("Hi there and greetings!");

//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("temple-container");
//     document.body.insertBefore(newDiv, currentDiv);
// }

let testVariable = "test";


// document.querySelector("#temple-container").innerHTML = `words ${testVariable} ${temples[0].templeName}`;


// function createCard(temples, populateCard) {


//populate card

// function populateCard(value, index, array) {
    // document.getElementById("temple-container").innerHTML = `${temples[index].templeName} ${temples[index].location} ${temples[index].dedicated} ${temples[index].area}`;
    // document.getElementById("temple-container").innerHTML = `${templeName} ${location} ${dedicated} ${area}`;
    
    // }
    
    // temples.forEach
    
    //     (temple => document.getElementById("temple-container").innerHTML = `${temples[index].templeName} ${temples[index].location} ${temples[index].dedicated} ${temples[index].area}`);
    
    // temples.forEach(temple);
    // const 
    
    // populateCard();// // let templeName = "erte";
    // document.querySelector("card").innerHTML = `words ${testVariable} ${temples[i].templeName} ${temples[i].location} ${temples[i].dedicated}`;
    
    // for (let data in temple) {
        //     data = temple[data];
        // }
        
        // document.querySelector("temple-container").innerHTML = temple['templeName;
        // return templeName;;
        // }
        // function populateCard() { 
            //     document.getElementById(card)
            
            //     .innerHTML = "I am nested";
            
            // }
            
            
            // temples.forEach(createCard);
            // document.getElementById("temple-container").innerHTML = "I have changed!";
            
            
            // populateCard();
            // //created card outside of div
function createCard(i, populateCard) {
    const card = document.createElement("card");
    document.getElementById("temple-container").appendChild(card);
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
    img.src = temples[i].imageUrl;
    img.alt = `Image of ${temples[i].templeName}`;
    img.loading = "lazy";
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated)
    card.appendChild(area);
    card.appendChild(img);
    document.getElementById("temple-container").appendChild(card);
    // populateCard(i);   
    name.append(temples[i].templeName);
    location.append(`Location: ${temples[i].location}`);
    dedicated.append(`Dedicated: ${temples[i].dedicated}`)
    area.append(`Area: ${temples[i].area} sq ft`)

    // card.append("more words");
}   
            
function populateCardBad(i) {
    const card = document.querySelector("card");
    // let name = temples[0].templeName;
    let name = document.createElement("h2");
    // name

    let location = temples[i].location;
    let dedicated = temples[0].dedicated;
    // let area = temples[0].area;
    // let imageUrl = temples[0].imageUrl;
    // card.innerHTML = ` ${name} location: ${location} dedicated: ${dedicated} size: ${area}`;
    // card.innerHTML = "card words";
    // templeContainer.appendChild(`NAME: ${name}`);
    // const templeContainer = document.getElementById("#temple-container");
    // templeContainer.appendChild(card);

    card.append(`LOCATION: ${location}`);
    // card.append(`DEDICATED: ${dedicated}`);
    // card.append(`SIZE: ${area}`);
    card.append(name);
    document.body.appendChild(card);
}
            
for (let i = 0; i < temples.length; i++) {
    createCard(i);
    // populateCard(i);
}
    // temples.forEach(createCard(temple))

// createCard();
