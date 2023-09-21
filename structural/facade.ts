// Low level class
class PlumbingSystem {
    // Low level access to plumbing system
    setPressure(p:number) {
        console.log(`set pressure to ${p}`);
    }

    turnOn() {
        console.log(`plumbing turned on`);
    }

    turnOff() {
        console.log(`plumbing turned off`);
    }
}

// Low level class
class ElectricalSystem {
    // Low level access to electrical system
    setVoltage(p:number) {
        console.log( `set voltage to ${p}`);
    }

    turnOn() {
        console.log( `electrical turned on`);
    }

    turnOff() {
        console.log( `electrical turned off`);
    }
}

// Facade class
class HouseSystem {
    private plumbing = new PlumbingSystem();
    private electric = new ElectricalSystem();

    public startHouseSystem () {
        console.log('starting the smart house system...');
        this.plumbing.turnOn();
        this.plumbing.setPressure(10);
        this.electric.turnOn();
        this.electric.setVoltage(110);
    }

    public stopHouseSystem () {
        console.log('stopping the smart house system...');
        this.plumbing.setPressure(0);
        this.plumbing.turnOff();
        this.electric.setVoltage(0);
        this.electric.turnOff();
    }
}

const houseSystem = new HouseSystem();
houseSystem.startHouseSystem();
houseSystem.stopHouseSystem();