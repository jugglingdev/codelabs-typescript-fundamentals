// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// PRIMITIVES
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// MORE COMPLEX TYPES
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
var people;
// TYPE INFERENCE
var course = 'React - The Complete Guide';
// course = 12341;  
// TypeScript infers that this should be a string
// UNION TYPES
var course2 = 'React - The Complete Guide';
course2 = 12341;
var userName2;
userName2 = 'Bud';
var person2;
var people2;
// FUNCTIONS & TYPES
function add(a, b) {
    return a + b; // returns a number
}
function printValue(value) {
    console.log(value); // void function - doesn't return
}
// GENERICS
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
// The types T must match 
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');  
// TypeScript knows this won't work because updatedArray[] has numbers
// CLASSES
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    } // shorthand constructor notation
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello!');
    },
};
var Instructor = /** @class */ (function () {
    function Instructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!!');
    };
    return Instructor;
}());
