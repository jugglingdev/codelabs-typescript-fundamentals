// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';

// course = 12341;  
// TypeScript infers that this should be a string

// Union Types

let course2: string | number = 'React - The Complete Guide';

course2 = 12341;  

let userName2: string | string[];

userName2 = 'Bud';

// Type Aliases

type Person = {
    name: string;
    age: number;
};

let person2: Person;

let people2: Person[];

// Function & types

function add(a: number, b: number) {
    return a + b;  // returns a number
}

function print(value: any) {
    console.log(value);  // void function - doesn't return
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
// The types T must match 

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');  
// TypeScript knows this won't work because updatedArray[] has numbers

