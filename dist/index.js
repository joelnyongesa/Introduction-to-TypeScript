"use strict";
let sales = 123456;
let course = "TypeScript";
let isPublished = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
let names = [];
names[0] = "Mercy";
names[1] = "Joel";
names[2] = "Medrine";
let isRegistered = [];
isRegistered[0] = true;
isRegistered[1] = false;
isRegistered[2] = true;
isRegistered[3] = true;
let user = [1, "Joel"];
let mySize = 3;
let myAge = "y";
function calculateIncomeTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
function calculateAge(yearOfBirth, currentYear = 2024) {
    return currentYear - yearOfBirth;
}
let employee = {
    id: 1,
    name: "Joel Nyongesa",
    retire: (date) => {
        console.log(date);
    }
};
let student = {
    id: 1,
    name: "Joel Kabebe",
    grade: 7,
    homeroom: "Chimamanda"
};
console.log(student);
//# sourceMappingURL=index.js.map