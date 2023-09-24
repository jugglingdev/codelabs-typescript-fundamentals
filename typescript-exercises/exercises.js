// Exercise 1: Basic Types
var studentName = 'Kayla';
var totalCourses = 4;
console.log(studentName);
console.log(totalCourses);
// Exercise 2: Arrays & Tuples
var subjects;
var bootcampStudent;
var car = {
    brand: 'Toyota',
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    brake: function () {
        console.log("The ".concat(this.brand, " is braking"));
    }
};
car.accelerate();
car.brake();
// Exercise 4: Functions & Types
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet('Carly'));
// Exercise 5: Classes with TypeScript
var BoocampStudent = /** @class */ (function () {
    function BoocampStudent(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    BoocampStudent.prototype.displayInfo = function () {
        console.log("\n            Name: ".concat(this.studentName, "\n          \nAge: ").concat(this.studentAge, "\n          \nGrade: ").concat(this.studentGrade, "\n        "));
    };
    BoocampStudent.prototype.isPassing = function (gradeThreshold) {
        return (this.studentGrade > gradeThreshold);
    };
    return BoocampStudent;
}());
var studentA = new BoocampStudent('Sophie Meyers', 14, 96);
var studentB = new BoocampStudent('Scott Meyers', 13, 68);
studentA.displayInfo();
studentB.displayInfo();
console.log(studentA.isPassing(70));
console.log(studentB.isPassing(70));
