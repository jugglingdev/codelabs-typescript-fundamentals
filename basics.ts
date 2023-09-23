// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// PRIMITIVES

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;


// MORE COMPLEX TYPES

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


// TYPE INFERENCE

let course = 'React - The Complete Guide';

// course = 12341;  
// TypeScript infers that this should be a string


// UNION TYPES

let course2: string | number = 'React - The Complete Guide';

course2 = 12341;  

let userName2: string | string[];

userName2 = 'Bud';


// TYPE ALIASES

type Person = {
    name: string;
    age: number;
};

let person2: Person;

let people2: Person[];


// FUNCTIONS & TYPES

function add(a: number, b: number) {
    return a + b;  // returns a number
}

function print(value: any) {
    console.log(value);  // void function - doesn't return
}


// GENERICS

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


// CLASSES

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ) {}  // shorthand constructor notation

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');

// student.courses // error (private)
// student.listCourses => Angular, React


// INTERFACES

/* 
Interfaces are similar to types but they have 1 extra feature:
they can be implemented by classes which forces the class to have the structure defined by the interface
*/

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!!');
    }
}
