/// reference: https://blog.reactplay.io/mastering-typescript-a-comprehensive-guide-for-getting-started-with-typescript#heading-basic-typescript-concepts

console.log("# Variable and type data: ");

// variable with a specific type
const count:number = 5;
let message = "Hello TS";
let myBolean: boolean = true;
let myAny: any;
let anyConst: any = '1';

console.log( { count, message, myBolean, myAny, anyConst });

console.log("# Function and Interfaces");

function addNumbers(a: number, b: number): number {
    return a + b;
}

let a = addNumbers(1,3);
let b = addNumbers(10,30);

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'John',
    age: 30
}

console.log({a}, b);
console.log({person}, person);
console.table([person, person, person]);

console.log("# Object and Class");

class Greeter {
    greeting: string;

    constructor(name: string) {
        this.greeting = name;
    }

    greet() {
        console.log (`Hello, ${ this.greeting }!`);
    }
}

let greeter = new Greeter('Typescript');
greeter.greet();

console.log("# Export");

import { resourceLimits } from "worker_threads";
import { Address, Education } from "./personalInformation";
let address: Address = new Address('Indonesia', '0898444279');
let education = new Education();
console.log({address, education});
console.log({address}, address.country, address.mobile);
// address.mobile = '';
// console.log({address}, address.country, address.mobile);
// address.mobile = undefined;
// console.log({address}, address.country, address.mobile);
// address.mobile = null;
// console.log({address}, address.country, address.mobile);

console.log("# Generic and Type Interface");

// A generic type parameter, which can be used to represent any type
function identity<T>(arg:T): T {
    return arg;
}

let iNum = identity<number>(1);
let iStr = identity<string>('1');
let iBool = identity<boolean>(true);

console.log({iNum, iStr, iBool}, iNum, iStr, iBool);

console.log('Decorator & Mixins');

// function myLog(target: any, key: string, descriptor: TypedPropertyDescriptor<Function>) {
//     const originalMethod = descriptor.value;

//     descriptor.value = (...args: any[]) => {
//         console.log(`Calling ${key} with`, args);
//         const result = originalMethod.apply(this, args);
//         console.log(`Result:`, result);
//         return result;
//     }

//     return descriptor;
// }

// function otherLog() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("first(): called");
//     };
//   }

// class MyClass {
//     @otherLog()
//     myMethod(value:number): number{
//         return value * value;
//     }
// }

// Mixins
class Animal {
    move(distance: number) {
        console.log(`Moving ${distance}m`);
    }
}

class CanSwim {
    swim(distance: number) {
        console.log(`Swimming ${distance}m`);
    }
}

class CanFly {
    fly(distance: number) {
        console.log(`Flying ${distance}m`);
    }
}

class Duck implements Animal, CanFly, CanSwim {
    move: (distance: number) => void;
    swim: (distance: number) => void;
    fly: (distance: number) => void;

    constructor() {
        this.move = Animal.prototype.move.bind(this);
        this.swim = CanSwim.prototype.swim.bind(this);
        this.fly = CanFly.prototype.fly.bind(this);
    }
}

// applyMixins(Duck, [Animal, CanSwim, CanFly]);

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach(baseCtor => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//       Object.defineProperty(
//         derivedCtor.prototype,
//         name,
//         Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
//       );
//     });
//   });
// }

const duck = new Duck();
console.log({duck});
duck.move(10);
duck.fly(12);
duck.swim(20);

const dog = new Animal();
console.log({dog});
dog.move(2);

console.log('Async and Wait');

function wait(ms:number) {
    console.log(`waiting... ${ms}ms`);
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function myAsyncFunction() {
    console.log('Start');
    await wait(2000);
    console.log('Middle');
    await wait(2000);
    console.log('End');
}

myAsyncFunction();