/*Create a Person class with three attributes: name, weight, and height. Create a method that can calculate the BMI of a
person using the formula below. Create an object of the class and use the function.
BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.*/


class Person
{
    constructor(name,weight,height) {  //attributes
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
        bmi(pounds,inches)  //calculates bmi
        {
            return (pounds/(2*inches)*703) //return
        }
    }

var me= new Person ("Juwan", 120, 68)
console.log(me.bmi(me.weight,me.height));  //prints bmi in console

