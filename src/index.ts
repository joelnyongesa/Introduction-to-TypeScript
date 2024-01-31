let sales: number = 123_456; //when a number is large, we can separate it using underscores to make it readable
let course: string = "TypeScript";
let isPublished: boolean = true;

// We however don't always have to annotate our variables eg:
// let sales=123_456 /* The TypeScript compiler will assume it is a number */

// Type any - Can represent any type of values - It is against the benefits of TS.
let level;
level = 1;
level = "a";


function render(document: any){
    console.log(document);
    
}


// arrays -- Types: Number, string, Boolean and so on.
// let numbers = [] // becomes any type, which means that numbers[0] =1 and numbers[1] = "2" can still work. To prevent this:
let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
// numbers[1] = "Joel" /* String value is not assignable to a number */

let names: string[] = []
names[0] = "Mercy";
names[1] = "Joel";
names[2] = "Medrine"

// names.forEach(name => console.log(name.toUpperCase()));

let isRegistered: boolean[]= []
isRegistered[0] = true
isRegistered[1] = false
isRegistered[2] = true
isRegistered[3] = true

// isRegistered.forEach(v => console.log(!v));



// TUPLES --  For key value pairs. Rule of thumb is to keep them to a maximum of two values
let user: [number, string] = [1, "Joel"]

// console.log(user[1].toUpperCase());


// ENUMS -- Represents a list of related constants, PascalCase.
const enum Size {Small=1, Medium, Large}

let mySize: Size = Size.Large

// console.log(mySize);

const enum Age {Child="c", Youth="y", Adult="a"}
let myAge: Age = Age.Youth;

// console.log(myAge);


// FUNCTIONS - always properly annotate your functions.
// Also, when working with functions, always enable these 3 compiler options: noUnusedLocals, noUnsusedParameters, noImplicitReturns
function calculateIncomeTax(income: number, taxYear: number): number {
    if(taxYear < 2022)
        return income * 1.2
    return income * 1.3
}

// console.log(calculateIncomeTax(50_000, 2022));

// What if we want to pass in an optional parameter?
function calculateAge(yearOfBirth: number, currentYear=2024): number{
    return currentYear - yearOfBirth;
}

// console.log(calculateAge(1999, 2010));


// OBJECTS -- Readonly attributes, explicitly define the types of the attributes and methods.

let employee: {
    readonly id: number, /*Cannot reassign any other value to this as it is read-only */
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Joel Nyongesa",
    retire: (date: Date) => {
        console.log(date);
        
    }
}

// console.log(employee);

let student: {
    readonly id: number,
    name: string,
    grade: number,
    homeroom?: string
} = {
    id: 1,
    name: "Joel Kabebe",
    grade: 7,
    homeroom: "Chimamanda"
}

console.log(student);

// EXERCISES
let a = 100; /*number*/
let b = 'Coffee'; /*string*/
let c = [true, false, false]; /*boolean*/