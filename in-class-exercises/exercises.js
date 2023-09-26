/* CLASS 3 Exercises */
console.groupCollapsed('Class 3 Exercises');
console.log('Exercise 1:');
console.log('Hello, World!');
console.log('Exercise 2:');
var myName = 'Kayla';
console.log(myName);
console.log('Exercise 3:');
function calculateAreaOfRectangle(length, width) {
    var area = length * width;
    console.log(area);
}
calculateAreaOfRectangle(4, 8);
console.log('Exercise 4:');
function checkIfEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(num + " is even");
    }
    else {
        console.log(num + " is odd");
    }
    ;
}
checkIfEvenOrOdd(11);
checkIfEvenOrOdd(4);
console.log('Exercise 5:');
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('Exercise 6:');
var username = prompt('Enter your name: ');
console.log('Hello, ' + username + '!');
console.log('Exercise 7:');
function calculateFactorial(num) {
    var product = 1;
    while (num >= 1) {
        product *= num;
        num--;
    }
    console.log(product);
}
calculateFactorial(4);
console.log('Exercise 8:');
function isLeapYear(year) {
    if (year % 100 == 0 && year % 400 !== 0) {
        console.log(year + ' is not a leap year');
    }
    else if (year % 4 == 0) {
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}
isLeapYear(2000); // true - 2000 is a leap year
isLeapYear(1700); // false - 1700 is not a leap year
isLeapYear(2015); // false - 2015 is not a leap year
isLeapYear(2016); // true - 2016 is a leap year
console.log('Exercise 9:');
function calculateSum() {
    var sum = 0;
    var num = 1;
    while (num <= 100) {
        sum += num;
        num++;
    }
    console.log(sum);
}
calculateSum();
console.log('Exercise 10:');
var num1 = parseInt(prompt('Enter a number: '));
var num2 = parseInt(prompt('Enter a number: '));
console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
console.log('Exercise 11: (nothing to print)');
var myString = 'hello';
var myNum = 42;
var myBoolean = true;
var empty = null;
var whoAmI = undefined;
var myDogs;
myDogs = {
    dog1: 'Chico Bean',
    dog2: 'Lillie'
};
var letters = ['a', 'b', 'c'];
var oops;
console.log('Exercise 12: (see webpage)');
var foodItems = [
    { name: 'smoothie',
        price: 4.25 },
    { name: 'smokedGouda',
        price: 3.20 },
    { name: 'bobaTea',
        price: 3.75 }
];
var foodList = document.getElementById('foodList');
if (foodList != null) {
    for (var i = 0; i < foodItems.length; i++) {
        var itemName = foodItems[i].name;
        var li = document.createElement('li');
        li.innerHTML = itemName;
        foodList.append(li);
    }
}
else {
    console.log('foodList is empty');
}
console.log('Exercise 13:');
function arrayOfMultiples(num, length) {
    var array = [];
    for (var i = 1; i <= length; i++) {
        var multiple = num * i;
        array.push(multiple);
    }
    console.log(array);
}
arrayOfMultiples(7, 5);
arrayOfMultiples(12, 10);
arrayOfMultiples(17, 6);
console.log('Exercise 14:');
function typeOfNumber(num) {
    if (num == 0) {
        console.log('zero');
    }
    else if (num % 2 == 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}
typeOfNumber(15);
typeOfNumber(8);
typeOfNumber(0);
console.log('Exercise 15:');
function multiply(num) {
    var multiples = [];
    for (var i = 1; i <= 10; i++) {
        multiples.push(num * i);
    }
    console.table(multiples);
}
multiply(4);
console.log('Exercise 16:');
function isPrime(num) {
    var isPrime = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}
isPrime(2); // true
isPrime(15); // false
isPrime(13); // true
console.groupEnd;
