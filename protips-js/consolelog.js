// How to use console.log()
const foo = { name: 'tom', age: 30, energic: true };
const bar = { name: 'dic', age: 31, energic: false };
const baz = { name: 'hari', age: 32, energic: true };

// Bad code
console.log(foo);
console.log(bar);
console.log(baz);

// Computed Property Names
console.log('%c My friends', 'color: blue; font-weight: bold'); // work only console web broswer
console.log({foo, bar, baz});

// Console table
console.table({foo, bar, baz});

// Console time
console.time('looper');

setTimeout(() => {
    console.timeEnd('looper');
}, 1000);

// Sack Trace Logs
const deleteMe = () => console.trace('trace me');
deleteMe();
// deleteMe();
// deleteMe();
// deleteMe();