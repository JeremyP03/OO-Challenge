class Vehicle {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }

    honk() {
        return `Beep!!`
    }
    toString() {
        return `this is a ${this.make} ${this.model} from ${this.year}`
    }
};

class Car extends Vehicle{
    constructor(make, mode, year, numWheels) {

        super();

        this.numWheels = 4;
    }
};


class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {

        super();

        this.numWheels = 2;
        

    }
    
    revEngine() {
        return `VROOOOOOOOOOM!!!!!!!`
    }
}


class Garage {
constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;

}


    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return `Only vehicles are allowed in here`;
        }
        if (this.vehicles.length >= this.capacity) {
            return `sorry, we're full...`;
        }
        this.vehicles.push(newVehicle);
        return `vehicle added`;

    }
}