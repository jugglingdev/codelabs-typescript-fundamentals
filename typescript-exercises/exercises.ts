// Exercise 1: Basic Types

const studentName: string = 'Kayla';
const totalCourses: number = 4;

console.log(studentName); // Kayla
console.log(totalCourses);  // 4

// Exercise 2: Arrays & Tuples

let subjects: string[];
let bootcampStudent: [string, number];

// Exercise 3: Interfaces

interface Vehicle {
    brand: string;
    speed: number;

    accelerate(): void;
    brake(): void;
}

const car: Vehicle = {
    brand: 'Toyota',
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake(): void {
        console.log(`The ${this.brand} is braking`);
    }
}

car.accelerate();  // The Toyota is accelerating
car.brake();  // The Toyota is braking

// Exercise 4: Functions & Types

function greet(name: string) {
    return `Hello, ${name}!`;
}

console.log(greet('Carly'));  // Hello, Carly!

