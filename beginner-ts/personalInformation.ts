import { throws } from "assert";

const IsPII: boolean = true;

export class Address {
    private _country: string;
    private _mobile: string;

    constructor (country:string, mobile:string) {
        if (!country || !mobile) {
            throw new Error(`Invalid parameter.`);
        }
        
        this._country = country;
        this._mobile = mobile;
    }

    get country() {
        return !IsPII ? this.maskString(this._country) 
        : this._country;
    }

    set country(newCountry) {
        this._country = newCountry;
    }

    get mobile() {
        return IsPII ? this.maskString(this._mobile) 
        : this._mobile;
    }

    set mobile(newMobile) {
        this._mobile = newMobile;
    }

    private maskString(params:string) {
        if (!params) {
            throw new Error(`Invalid parameter.`);
        }

        const plen = params.length;

        return params.split('')
        .map((e, i) => (i > 2 && i < plen - 3 ? '*' : e))
        .join('');
    }
}

export class Education {
    constructor() {
        // todo something??
    }
}

export class Person {
    private _age:number;
    private _firstName:string;
    private _lastName:string;

    get age() {
        return this._age;
    }

    set age(ageN:number) {
        if (ageN < 0 && ageN > 200) {
            throw new Error(`Invalid parameter: ${ageN}`);
        }

        this._age = ageN;
    }

    getFullname():string {
        return `${this._firstName} ${this._lastName}`;
    }

    set firstName(firstname:string) {
        this._firstName = firstname;
    }

    set lastName(lastname:string) {
        this._lastName = lastname;
    }
}