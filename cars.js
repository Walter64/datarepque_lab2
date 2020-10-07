/**
 * Walter Regan
 * Student ID 10100255
 * 
 * Lab2 Exercise 3
 * 
 */

// Vehicle class
class Vehicle{

    // constructor
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // information method to display logs vehicle information
    information(){
        console.log(`\nMake: ${this.make}, \nModel: ${this.model}, \nYear: ${this.year}`);        
    }

}// end Vehicle class

// Cars class
class Cars extends Vehicle{

    // constructor
    constructor(make, model, year, door){
        // invoke Vehicle class using passing 3 arguments 
        super(make, model, year);

        // assign door value to variable door belonging to Cars class
        this.door = door;
    }

    // information method to display logs vehicle information
    info(){
        // invoke information() method in Vehicle class
        super.information(); 

        // display number of doors
        console.log(`Doors: ${this.door}\n\n`);        
    }

} // end Cars class

// instantiate Cars class - passing 4 arguments to constructor
let cars = new Cars("Ford", "Escort", "1999", "4");

// invoke infor() method of the Cars class
cars.info();

