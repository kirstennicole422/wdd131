const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i += 1;
}

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item)
    }
});

for (let item in studentReport) {
    if (studentReport[item] < LIMIT) {
        console.log(studentReport[item])
    }
}



const DAYS = 6;
let dayCount = 1;
// let day = "";
let dayNumber = 0;
let today = new Date();
let todayWord = new Intl.DateTimeFormat('en-US', {weekday: "long"}).format(today);

console.log(`Today is ${todayWord}`);


while (dayCount <= DAYS) {
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + dayCount);
    let tomorrowWord = new Intl.DateTimeFormat('en-US', {weekday: "long"}).format(tomorrow);
    console.log(`The next day is ${tomorrowWord}`);
    dayCount++;
}

// while (dayCount < DAYS) {
//     let day = new Date()
//     dayNumber = dayCount + today
//     // day = //convert daynumber to day
//     console.log(`The next day is ${new Intl.DateTimeFormat('en-US', {weekday: "long"}).format(today)}`)
//     dayCount++
// }


// add one to day
// convert to day name
//repeat
