# TypeScript Fundamentals

This project was completed as part of the TypeScript Introduction module from Maximilian Schwarzm&uuml;ller's course [Angular - The Complete Guide](https://pro.academind.com/courses/) in conjunction with the [Codefi CodeLabs](https://www.codelabsdash.com/) bootcamp curriculum.

## Table of Contents

- [TypeScript Fundamentals](#typescript-fundamentals)
  - [Table of Contents](#table-of-contents)
  - [TypeScript Introduction](#typescript-introduction)
    - [Base Types \& Primitives](#base-types--primitives)
    - [Array \& Object Types](#array--object-types)
    - [Type Inference](#type-inference)
    - [Working with Union Types](#working-with-union-types)
    - [Assigning Type Aliases](#assigning-type-aliases)
    - [Diving into Functions \& Function Types](#diving-into-functions--function-types)
    - [Understanding Generics](#understanding-generics)
    - [Classes \& TypeScript](#classes--typescript)
    - [Working with Interfaces](#working-with-interfaces)
    - [Configuring the TypeScript Compiler](#configuring-the-typescript-compiler)
  - [Reflection](#reflection)
  - [Acknowledgements](#acknowledgements)

## TypeScript Introduction

### Base Types & Primitives

Primitives in TypeScript include strings, numbers, and booleans.  Their types are declared with a `:` after the variable name.

```ts
let drink: string;
drink = 'smoothie';

let food: string = 'potato';
```

### Array & Object Types

Property types in array and objects are declared in a similar way, even with complex structures like an array of objects.

```ts
let car: {
    make: string;
    model: string;
    year: number
}

car = {
    make: 'Toyota',
    model: 'Prius',
    year: 2012
}

let cars: {
    make: string;
    model: string;
    year: number
}[]
```

### Type Inference

If you don't explicitly state the type of a variable, TypeScript will infer the type.

```ts
let song = 'Somewhere Over the Rainbow';
song = 2718;  // this won't work - TypeScript infers string
```

### Working with Union Types

You can indicate that a variable could be 2 or more types.

```ts
let secret: string | number = 'open sesame';
secret = 839103.23;
```

### Assigning Type Aliases

Type aliases are used to avoid duplicate code.  They are a step down from interfaces which we'll see soon.

```ts
type Relative: {
    name: string;
    relationshipToMe: string;
    age: number;
}

let mom: Relative;
let family: Relative[];
```

### Diving into Functions & Function Types

Function parameters also have their types set in TypeScript.  TypeScript will infer the return type.  Function that don't return anything are called `void`.

```ts
function multiply(a: number, b: number) {
    return a * b;
}

function sayHello(name: string) {
    console.log(`Hello, ${name}!`);  // void function
}
```

### Understanding Generics

Generics are used when multiple type options are possible for function parameters, but you need them all to match.  They are often indicated with `<T>`.

```ts
function addToArray<T>(value: T, array: T[]) {
    const newArray = [value, ...array];
    return newArray;
}

const stringArray = ['paper', 'scissors'];
const numberArray = [7, 8, 9];

const newStringArray = addToArray('rock', stringArray);  // [ rock, paper, scissors ]
const newNumberArray = addToArray(6, numberArray);  // [ 6, 7, 8, 9 ]
```

### Classes & TypeScript

TypeScript classes have a shorthand for constructor methods.  In them, you can specify whether a variable is public or private and there's no need to fill out `this.value = value`.

```ts
class Animal {

    constructor(
        public name: string,
        public species: string,
        private exhibit: string,
    ){}
}

const mufasa = new Animal('Mufasa', 'lion', 'Africa');
```

### Working with Interfaces

Interfaces are similar to types but with one extra feature: they can be implemented by classes.  This forces the class to maintain the structure defined by the interface.

```ts
interface Assignment {
    title: string;
    class: string;
    pointsPossible: number;
}

class Essay extends Assignment {
    title: string;
    class: string;
    pointsPossible: number;

    constructor(title: string, class: string, pointsPossible: number) {
        this.title = title;
        this.class = class;
        this.pointsPossible = number;
    }
}

const typeScriptEssay = new Essay('TypeScript Essay', 'CodeLabs Bootcamp', 100);
```

### Configuring the TypeScript Compiler

To add a TypeScript compiler config file, use `npx tsc --init` in the terminal.  This will be handy when you need to compile multiple `.ts` files.  Note that Angular will do this out of the box.

Run `npx tsc filename.ts` to compile an individual file.  This will create a `.js` file of the same name.

## Reflection

Overall, this was a nice, brief overview of basic TypeScript principles.  I see a lot of similarities with Java and OOP principles that I've used in the past, so I'm confident I will be able to grasp the concepts as I practice.

I'm really glad this module covered generics and interfaces.  I liked the example Max gave on generics.  I don't have a lot of experience with those yet, but his explanation was very clear.  

I also appreciated the brief explanation of the differences between types and interfaces.  I'll be interested to see how to practically apply those in different scenarios in the future.

In upcoming projects, I see how TypeScript can help keep code clean.  There may be more work up front as errors are caught earlier, but I see that as a good thing.  It will help me keep track of my variable types and in general keep the code cleaner.  Let's dive in!

## Acknowledgements

Shoutout to Maximilian Schwarzm&uuml;ller for his course [Angular - The Complete Guide](https://pro.academind.com/courses/).  Thank you, Max, for your hard work creating such a comprehensive course.

Another shoutout to [Codefi CodeLabs](https://www.codelabsdash.com/) for putting together this course and pulling in the best resources for learning software development.  The code coaches and this semester's cohort have been awesome to work with.
