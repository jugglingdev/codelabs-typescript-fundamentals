/* CLASS 3 EXERCISES */
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
var num1 = Number(prompt('Enter a number: '));
var num2 = Number(prompt('Enter a number: '));
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
/* CLASS 4 EXERCISES */
console.groupCollapsed('Class 4 Exercises');
console.log('Exercise 1: (see alerts)');
function greet() {
    var name = prompt('What is your name?');
    if (name == '' || name == null) {
        alert('Hi there!');
    }
    else {
        alert('Hello, ' + name + '!');
    }
}
greet();
console.log('Exercise 2:');
function multiplyNum(num1, num2) {
    console.log(num1 * num2);
}
multiplyNum(2, 4);
multiplyNum(6, 3);
multiplyNum(0, 1);
console.log('Exercise 3:');
var person = {
    name: 'Bob',
    age: 42,
    gender: 'male',
};
console.log(person);
console.log('Exercise 4:');
var car = {
    make: 'Honda',
    model: 'Accord',
    year: 2007,
};
console.log(car);
console.log('Exercise 5:');
function reverseString(string) {
    return string.split('').reverse().join('');
}
console.log(reverseString('potato'));
console.log(reverseString('Alabama'));
console.log('Exercise 6:');
function calculateRadius(r) {
    var area = Math.pow((Math.PI * r), 2);
    return area;
}
console.log(calculateRadius(4));
console.log('Exercise 7:');
console.log(new Date());
console.log('Exercise 8:');
var randomNum = Math.ceil(Math.random() * 10);
console.log(randomNum);
console.log('Exercise 10:');
function tellStory(noun) {
    console.log("There once was a ".concat(noun, ". The ").concat(noun, " was very happy. The end."));
}
tellStory('potato');
console.log('Exercise 11:');
var user2 = {
    name: 'Billy',
    age: 42,
    occupation: 'rock climber',
};
function printUserInfo() {
    for (var property in user2) {
        console.log("".concat(property, ": ").concat(user2[property]));
    }
}
printUserInfo();
console.log('Exercise 12:');
function keysAndValues(object) {
    var sortedObject = sortKeys(object);
    return keyAndValueArrays(sortedObject);
}
function sortKeys(object) {
    return Object.keys(object)
        .sort()
        .reduce(function (result, key) {
        result[key] = object[key];
        return result;
    }, {});
}
function keyAndValueArrays(sortedObject) {
    var keys = [];
    var values = [];
    for (var key in sortedObject) {
        keys.push(key);
        values.push(sortedObject[key]);
    }
    ;
    return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // [['a', 'b', 'c'], [1, 2, 3]]
console.log(keysAndValues({ a: 'Apple', c: 'Google', b: 'Microsoft' })); // [['a', 'b', 'c'], ['Apple', 'Microsoft, 'Google']]
console.log(keysAndValues({ key3: undefined, key1: true, key2: false })); // [['key1', 'key2', 'key3'], [true, false, undefined]]
console.log('Exercise 13:');
function reverseWords2(string) {
    var cleanString = string.toLowerCase().replace(/[^a-zA-Z ]/g, '');
    return cleanString.split(' ').reverse().join(' ');
}
console.log(reverseWords2('happy to be alive'));
console.log(reverseWords2('Someday My Prince Will Come'));
console.log(reverseWords2('Can you hear me now?'));
console.log('Exercise 14:');
function balancedParentheses(string) {
    var stack = [];
    var stringArray = string.split('');
    for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
        var item = stringArray_1[_i];
        if (item == '(' || item == '[' || item == '{') {
            stack.push(item); // add opening parenthesis to stack
        }
        else if (item == ')' || item == ']' || item == '}') {
            if (stack.length == 0) {
                return 'not balanced'; // can't start with a closing parenthesis
            }
            var topItem = stack.pop(); // top opening parenthesis to compare below
            if ((item == ')' && topItem != '(') || (item == ']' && topItem != '[') || (item == '}' && topItem != '{')) {
                return 'not balanced';
            }
        }
    }
    return stack.length == 0 ? 'balanced' : 'not balanced'; // single remaining parenthesis would not be balanced
}
console.log(balancedParentheses('()[]{}')); // balanced
console.log(balancedParentheses('([{}])')); // balanced
console.log(balancedParentheses('()[(())]{)}')); // not balanced
console.log(balancedParentheses('][((}')); // not balanced
console.log('Exercise 15:');
function isAnagram(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    var letterCount1 = countLetters(word1);
    var letterCount2 = countLetters(word2);
    return areObjectsEqual(letterCount1, letterCount2);
}
function countLetters(word) {
    return word.split('') // make a char array
        .reduce(function (letterCount, currentLetter) {
        letterCount[currentLetter] = (letterCount[currentLetter] || 0) + 1; // if currentLetter is not a key, initialize at 0 then increment by 1
        return letterCount; // return updated object as result of each iteration { h: 1, e: 1, a: 1, r: 1, t: 1 }
    }, {});
}
function areObjectsEqual(object1, object2) {
    var keys1 = Object.keys(object1); // store the keys in an array ['h', 'e', 'a', 'r', 't']
    var keys2 = Object.keys(object2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var key = keys1_1[_i];
        if (object1[key] != object2[key]) { // compare letter counts
            return false;
        }
    }
    return true;
}
console.log(isAnagram('heart', 'earth')); // true
console.log(isAnagram('RACE', 'care')); // true
console.log(isAnagram('mom', 'dad')); // false
console.log(isAnagram('fish', 'water')); // false
console.log('Exercise 16:');
function FizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
FizzBuzz();
console.log('Exercise 17:');
function isPalindrome(word) {
    var cleanWord = word.toLowerCase().replace(/[^a-zA-Z]/g, ''); // remove punctuation and spaces
    return cleanWord == cleanWord.split('').reverse().join('');
}
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('Dad')); // true
console.log(isPalindrome('banana')); // false
console.log(isPalindrome('David')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log('Exercise 18:');
function reverseWords(string) {
    var cleanString = string.toLowerCase().replace(/[^a-zA-Z ]/g, '');
    return cleanString.split(' ').reverse().join(' ');
}
console.log(reverseWords('tell me what you want'));
console.log(reverseWords('How are you today?'));
console.log(reverseWords('Excited, I am!'));
console.groupEnd();
