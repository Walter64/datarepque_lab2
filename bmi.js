/**
 * Walter Regan
 * Student ID 10100255
 * 
 * Lab2 Exercise 2 
 * 
 */

// create class BMI
class BMI {
    // create constructor with two parameters
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    // calculateBMI method
    calculateBMI(){
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

// instantiate class - creates object of type BMI
let MyBmi = new BMI(2, 90);

// invoke calculateBMI method and assign return value to calculatedBMI variable
let calculatedBMI = MyBmi.calculateBMI();

// display bmi value to console - will use the cmd, 'node bmi.js' in terminal
console.log(calculatedBMI);
