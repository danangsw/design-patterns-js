const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

// Bad Code
 function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
 }

 // Good Code
 function feed1({name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
 }
// OR
function feed2(animal) {
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed(turtle));
console.log(feed1(turtle));
console.log(feed2(turtle));