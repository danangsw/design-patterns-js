// Objects
let pikachu = { name: 'Pikachu'};
const stats = { hp: 40, attack: 60, defense: 45 }

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
console.log({ pikachu });

const lvl1 = Object.assign(pikachu, stats);
console.log({ pikachu, lvl1 });

const lvl2 = Object.assign(pikachu, { hp: 45 });
console.log({ pikachu, lvl1, lvl2 });

pikachu = {...pikachu, ...stats};
pikachu = {...pikachu, ...{hp: 55, skill: 'lightning', defense: 60}};

console.log({ pikachu });

const pokemon = ['Arbok', 'Raichu', 'Sandshrew'];
console.log('1. Init', pokemon);

// Push
const pokemon1 = [...pokemon, 'Bullbassur', 'Metapod', 'Weedle'];
console.log('2. Push', pokemon1);

// Shift
const pokemon2 = ['Bullbassur', 'Metapod', 'Weedle', ...pokemon];
console.log('2. Shift', pokemon2);


 