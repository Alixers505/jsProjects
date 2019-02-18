// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William"
];

const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const century1500 = inventors.filter(
    inventor => inventor.year >= 1500 && inventor.year < 1600
);
// console.table(century1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const inventorNames = inventors.map(name => name.first + " " + name.last);
// console.table(inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const birthdates = inventors.sort(function(a, b) {
    return a.year - b.year;
});
// console.table(birthdates);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const life = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

// console.log(life);

// 5. Sort the inventors by years lived
const yearsSorted = inventors.sort((a, b) => {
    return a.year - a.passed - (b.year - b.passed);
});
// console.table(yearsSorted);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Find and define the container
// Find and define the links within the container (define as an array using array.from)
// Use map and filter to search for "de" within the links

//const category = document.querySelector(".mw-category");
//const links = Array.from(category.querySelectorAll("a"));
//const de = links
//    .map(link => link.textContent)
//    .filter(streetName => streetName.includes("de"));

// 7. Sort Exercise
// Sort the people alphabetically by last name

const lastName = people.sort((aOne, bOne) => {
    const [aLast, aFirst] = aOne.split(", ");
    const [bLast, bFirst] = bOne.split(", ");
    return aLast > bLast ? 1 : -1;
});
console.log(lastName);

// so const [aLast, aFirst] takes a string and splits it into a first and last name,
// then const [bLast, bFirst] splits a second string into first and last name,
// then, the return compares those two strings and orders them alphabetically (based on Last)
// sort loops through all of the items in the array and sorts them as the return requests

// 8. Reduce Exercise
// Sum up the instances of each of these
// const data contains various types of travel (car, truck, walk, etc)

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);

// you start variable equal to the array.reduce, with a blank object appearing after the function
// the function calls for an obj and an item
// every time you loop over the items, it checks to see if that object exists
// if it doesn't exists, it creates an object, starting it out at 0, within the blank object you set after the function
// then it adds +1 to that object and returns the object
// this reduce loop continues until all items in the array have been looped over
// and the objects have been noted with the number of times they appear within the original array
