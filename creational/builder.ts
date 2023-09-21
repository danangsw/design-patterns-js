class Hotdog {
    constructor(
        public bread: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean,
    ) {
        this.ketchup = false;
        this.mustard = false;
        this.kraut = false;
    }

    addKetchup() {
        this.ketchup = true;
        return this;
    }

    addMustard() {
        this.mustard = true;
        return this;
    }

    addKraut() {
        this.kraut = true;
        return this;
    }
}

const hotdogs = [
    new Hotdog('Potato Bun')
    .addKetchup()
    .addKraut()
    .addMustard(),
    new Hotdog('Wheat Bun')
    .addMustard(),
    new Hotdog('Classic Rolls')
    .addKraut()
    .addMustard()
];

console.log({hotdogs});