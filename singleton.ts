class Settings {
    static instance: Settings;
    public readonly mode = 'dark';

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

const setting = Settings.getInstance();

console.log(setting);