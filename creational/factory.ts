class IOSButton {
    deviceType() {
        return 'IOS Button';
    }
}

class AndroidButton {
    deviceType() {
        return 'Android Button';
    }
}

class ButtonFactory {
    // private _os: string;

    // constructor(os?: string) {
    //     this._os = os ? os : 'android';
    // }

    createButton(os?: string) {
        switch (os) {
            case 'ios':
                return new IOSButton();
            case 'android':
                return new AndroidButton();
            default:
                return new AndroidButton();
        }
    }
}

const factoryButton = new ButtonFactory();
const androidButton = factoryButton.createButton('android');
const iosButton = factoryButton.createButton('ios');
const undefinedButton = factoryButton.createButton();

console.log({factoryButton, iosButton, androidButton, undefinedButton});
console.log(iosButton.deviceType(), androidButton.deviceType(), undefinedButton.deviceType());