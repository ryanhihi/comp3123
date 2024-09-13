//Ryan Tran
//101460443
//Lab Assignment 2 - Comp3123

//Question 1
function gretter(myArray){
    var greetText = 'Hello ';
    for (let v of myArray){
        console.log(greetText + v);
    }
}

gretter(["Randy Savage", "Eric Flair", "Hulk Hogan"]);

//Question 2
function capitalize([first, ...end]){
    return first.toUpperCase()+end.join('');

}

console.log(capitalize('foobar'));
console.log(capitalize('nodeJs'));

//Question 3
const colors = ['red', 'green', 'blue'];
const capitalizeColors = colors.map(color => capitalize(color));

console.log(capitalizeColors);

//Question 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value<20);
console.log(filterLessThan20);

//Question 5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((accumulation, value) => accumulation + value, 0);
const calculateProduct = array.reduce((accumulation, value) => accumulation*value, 1);
console.log(calculateSum);
console.log(calculateProduct);

//Question 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model}, ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;

    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan =  new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());