// array of objects
const meetings = [
    {
        region: "Northern Colorado",
        city: "Fort Collins",
        eventDate: "Dec 2",
        time: "3",
        location: "2",
    },
    {
        region: "Northern Colorado",
        city: "Loveland",
        eventDate: "2",
        time: "5",
        location: "8",
    },
    {
        region: "Northern Colorado",
        city: "Greeley",
        eventDate: "e",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Northern Colorado",
        city: "Boulder",
        eventDate: "r",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Denver Metro Area",
        city: "Broomfield",
        eventDate: "e",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Denver Metro Area",
        city: "Denver",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Denver Metro Area",
        city: "Parker",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Denver Metro Area",
        city: "Littleton",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Denver Metro Area",
        city: "Aurora",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Western Colorado",
        city: "Rifle",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Western Colorado",
        city: "Grand Junction",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Western Colorado",
        city: "Parachute",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Colorado Springs",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Monument",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Manitou Springs",
        eventDate: "",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Fountain",
        eventDate: "Feb 22",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Southern Colorado",
        city: "Pueblo",
        eventDate: "Feb 29",
        time: "",
        location: "",
        contact: "",
    },
    {
        region: "Southern Colorado",
        city: "Salida",
        eventDate: "Feb 21",
        time: "",
        location: "",
        contact: "",
    }
];

function createRegionList() {
    let i = 0;
    let regions = []
    while (i < meetings.length) {
        if (!regions.includes(meetings[i].region)){
            regions.push(meetings[i].region);
        }
        i++
    }
    return regions;
}

function createLocationCards(j, regionCard) { 
    let k = 0;
    while (k < meetings.length) {
        if (meetings[k].region == regionList[j]) {
            let card = document.createElement("div");
            card.classList = "card";
            regionCard.append(card);
            
            let city = document.createElement("h3");
            city.classList = "city";
            city.innerHTML = meetings[k].city;
            card.append(city);
            
            let eventDate = document.createElement("p");
            eventDate.classList = "date"
            eventDate.innerHTML = `Date: ${meetings[k].eventDate}`;
            card.append(eventDate);
            
            let time = document.createElement("p");
            eventDate.classList = "time"
            time.innerHTML = `Time: ${meetings[k].time}`;
            card.append(time);
            
            let location = document.createElement("p");
            eventDate.classList = "location"
            location.innerHTML = `Location: ${meetings[k].location}`;
            card.append(location);
        }
        k++;
    }
}

function createRegionCards() {
    let j = 0;
    while (j < regionList.length) {
        let regionCard = document.createElement("div");
        regionCard.classList = "region-card"
        groups.append(regionCard);
        
        let region = document.createElement("h2");
        region.classList = "region";
        region.innerHTML = regionList[j];
        regionCard.append(region);
        createLocationCards(j, regionCard);
        j++
    }
}

let groups = document.querySelector(".groups");
let regionList = createRegionList();
createRegionCards();

// add form click event listener
// make html form
//make form thanks page
//check html overview
//check css overview
//check lighthouse
//check dev tools css overview
//add local storage occurance
//check for css repeat declarations
//add details to event cards
//make footer stay at bottom of page
// make hamburger menu do the thing