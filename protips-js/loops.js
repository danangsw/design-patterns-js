const orders = [54, 67, 90, 12, 34, 44, 100];
let total = 0;
let average = 0;
let highValue = [];
let withTax = [];

// Reduce
total = orders.reduce((prev, cur) => prev + cur);
average = total / orders.length;

// Map
withTax = orders.map(val => val * 1.1);

// Filter
highValue = orders.filter(val => val > 60);

console.log( {orders, total, average, withTax, highValue} );