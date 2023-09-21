// https://www.dofactory.com/javascript/design-patterns/proxy
interface addressLatLong {
    address:string;
    LatLong:string;
}

class GeoCoder {
    getLatLong(address: string): string {
        switch (address) {
            case "Amsterdam":
                return "52.3700° N, 4.8900° E";
            case "London":
                return "51.5171° N, 0.1062° W";
            case "Paris":
                return "48.8742° N, 2.3470° E";
            case "Berlin":
                return "52.5233° N, 13.4127° E"; 
            default:
                return '';
        }
    }
}

class GeoProxy {
    geocoder:GeoCoder;
    geocache:Array<addressLatLong>;

    constructor() {
        this.geocoder = new GeoCoder();
        this.geocache = Array<addressLatLong>();
    };

    getLatLong(address: string) {
        if(!(this.geocache.find((e) => e.address === address)))
        {
            this.geocache.push({
                address: address,
                LatLong: this.geocoder.getLatLong(address)
            });

            console.log(this.geocache);
        }

        // this.geocache.push({
        //     address: address,
        //     LatLong: this.geocoder.getLatLong(address)
        // });
        // console.log(this.geocache);
    }

    getCount() {
        return this.geocache.length;
    }
}

function run() {

    const geo = new GeoProxy();

    // geolocation requests
    geo.getLatLong("Paris");
    geo.getLatLong("London");
    geo.getLatLong("London");
    geo.getLatLong("London");
    geo.getLatLong("London");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Berlin");
    geo.getLatLong("London");
    geo.getLatLong("London");
    geo.getLatLong("Paris");
    geo.getLatLong("Berlin");
    geo.getLatLong("Berlin");
    geo.getLatLong("Berlin");
    geo.getLatLong("Berlin");
    geo.getLatLong("Berlin");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Amsterdam");
    geo.getLatLong("Amsterdam");

    console.log("\nCache size: " + geo.getCount());
}

run();