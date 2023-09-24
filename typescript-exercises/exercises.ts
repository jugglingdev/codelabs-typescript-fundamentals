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

// Exercise 5: Classes with TypeScript

class BoocampStudent {

    constructor (
        public studentName: string, 
        public studentAge: number, 
        private studentGrade: number,
    ){}

    displayInfo() {
        console.log(`
            Name: ${this.studentName}
          \nAge: ${this.studentAge}
          \nGrade: ${this.studentGrade}
        `)
    }

    isPassing(gradeThreshold: number) {
        return (this.studentGrade > gradeThreshold);
    }
}

const studentA = new BoocampStudent('Sophie Meyers', 14, 96);
const studentB = new BoocampStudent('Scott Meyers', 13, 68);

studentA.displayInfo();
    // Name: Sophie Meyers
    // Age: 14
    // Grade: 96
studentB.displayInfo();
    // Name: Scott Meyers
    // Age: 13
    // Grade: 68

console.log(studentA.isPassing(70));  // true
console.log(studentB.isPassing(70));  // false
