const horse = {
    name: 'james',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 2
}

const {name , age, skills} = horse;
const horseName = `Horse name is ${name} at ${age} year/s old with skills are ${skills.join(', ')}`;
console.log(horseName);

function horseStr(str, {name, age, skills}) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]} ${name}, this is ${ageStr} at ${age} year/s old with skills are ${skills.join(', ')}`;
}

const horseAge = horseStr`Horse name is ${horse}`;
console.log(horseAge);