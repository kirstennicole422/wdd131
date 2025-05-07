const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]

for (let i = 0; i < DAYS; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

let i = 0
while (i < DAYS) {
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


let numberDays = 3;
let dayCount = 0;
let day = "";
let dayNumber = 0;
let today = new Date();

console.log(`Today is ${today}`)

while (dayCount < numberDays) {
    let day = new Date()
    dayNumber = daycount + today
    day = //convert daynumber to day
    console.log(`The next day is ${day}`)
    dayCount++
}


// add one to day
// convert to day name
//repeat