console.log("# Variable and type data: ");

// variable with a specific type
const count:number = 5;
let message = "Hello TS";
let myBolean: boolean;
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

