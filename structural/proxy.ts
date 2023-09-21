const original = {name: 'john'};

const reactive = new Proxy(original, {
    get (target, key){
        console.log('Tracking: ', key);
        return target[key];
    },
    set (target, key, value){
        console.log('updating UI...');
        return Reflect.set(target, key, value);
    }
});

reactive.name;
reactive.name = 'doe';