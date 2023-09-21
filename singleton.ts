class Settings {
    static instance: Settings;
    mode = 'dark';

    // prevent new with private constructor
    private constructor() {
        // new won't work
    }

    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }

        return Settings.instance;
    }
}

const settingSingleton = Settings.getInstance();
const settingSingleton2 = Settings.getInstance();
// const settingNew = new Settings();
settingSingleton.mode = 'dark';
settingSingleton2.mode = 'light';
console.log({settingSingleton, settingSingleton2});