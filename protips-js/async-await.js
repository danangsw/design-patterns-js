const random = (i = -1) => {
    if(i >= 0) console.log(i);
    return Promise.resolve(Math.random());
}

const asyncRandomSum = async () => {
    const a = await random();
    const b = await random();
    const c = await random();
    let d = 0;
    
    if(await random() > 0.5) {
        d = 1.0;
    }

    console.log({a, b, c, d});
    console.log(`Result ${a+b+c+d}`);
}

const asyncRandomSumAll = async () => {
    const proms = await Promise.all([random(0), random(1), random(2), random(3), random(4), random(5), random(6)])
    let sum = proms.reduce((a, b) => a + b);

    console.log(proms);
    console.log(`Result ${sum}`);
}

asyncRandomSum();
asyncRandomSumAll();