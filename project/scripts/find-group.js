// array of objects
const meetings = [
    {
        region: "Northern Colorado",
        city: "Fort Collins",
        eventDate: "1st Tuesday of the month",
        time: "6:00PM",
        location: "Old Town Library",
    },
    {
        region: "Northern Colorado",
        city: "Loveland",
        eventDate: "3rd Saturday of the month",
        time: "3:00PM",
        location: "Loveland Public Library",
    },
    {
        region: "Northern Colorado",
        city: "Greeley",
        eventDate: "1st of the month",
        time: "12:00PM",
        location: "UNC Student Center Lobby",
    },
    {
        region: "Northern Colorado",
        city: "Boulder",
        eventDate: "2nd Wednesday of the month",
        time: "5:30PM",
        location: "Norlin Library at CU Boulder",
    },
    {
        region: "Denver Metro Area",
        city: "Broomfield",
        eventDate: "4th Thursday of the month",
        time: "3:00PM",
        location: "Broomfield Library",
    },
    {
        region: "Denver Metro Area",
        city: "Denver",
        eventDate: "Every Sunday, weather permitting",
        time: "2:00PM",
        location: "Tivoli Quad (CU Denver)",
    },
    {
        region: "Denver Metro Area",
        city: "Parker",
        eventDate: "2nd Saturday of the month",
        time: "1:30PM",
        location: "Parker Library",
    },
    {
        region: "Denver Metro Area",
        city: "Littleton",
        eventDate: "Every Friday June-August",
        time: "7:30PM",
        location: "Robert F Clement Park",
    },
    {
        region: "Denver Metro Area",
        city: "Aurora",
        eventDate: "Every Wednesday",
        time: "2:15PM",
        location: "Aurora Library",
    },
    {
        region: "Western Colorado",
        city: "Rifle",
        eventDate: "1st and 3rd Tuesdays",
        time: "11:00AM",
        location: "Garfield County Library - Rifle Branch",
    },
    {
        region: "Western Colorado",
        city: "Grand Junction",
        eventDate: "2nd Thursday of the month",
        time: "6:00PM",
        location: "University Center at CMU",
    },
    {
        region: "Western Colorado",
        city: "Parachute",
        eventDate: "Last Saturday of the month",
        time: "3:00PM",
        location: "Parachute Branch Library",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Colorado Springs",
        eventDate: "2nd and 4th Mondays",
        time: "5:45PM",
        location: "UCCS University Center Main Lobby",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Monument",
        eventDate: "1st day of the month",
        time: "10:00AM",
        location: "Pikes Peak Library District",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Manitou Springs",
        eventDate: "2nd Wednesday of the month",
        time: "8:00PM",
        location: "Carnegie Library",
    },
    {
        region: "Colorado Springs Metro Area",
        city: "Fountain",
        eventDate: "3rd Friday of the month",
        time: "4:30PM",
        location: "Metcalfe Park",
    },
    {
        region: "Southern Colorado",
        city: "Pueblo",
        eventDate: "4th Tuesday of the Month",
        time: "2:00PM",
        location: "CSU Pueblo Bookstore",
    },
    {
        region: "Southern Colorado",
        city: "Salida",
        eventDate: "1st and 4th Sundays",
        time: "9:00AM",
        location: "Salida Regional Library",
    }
];

let groups = document.querySelector(".groups");
let regionList = createRegionList();

let regions = JSON.parse(localStorage.getItem("regions"));


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

createRegionCards();