const zombie = {
    eatBrains() {
        return 'yum...';
    }
}

const john = Object.create(zombie, {name: {value: 'john'}});
const chad = Object.getPrototypeOf(john);
const brad = Object.getPrototypeOf(john);


console.log({john});
console.log(john.eatBrains());

console.log({chad});
console.log(chad.eatBrains());

console.log({brad});
console.log(brad.eatBrains());