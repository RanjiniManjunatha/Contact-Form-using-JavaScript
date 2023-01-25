// Displaying the output

console.log("hello world!");

//My first javascript program

// Variables

let Name = 'Rani', lastName = 'Manjunath';
console.log(Name,lastName); 

//Constant variable

const pi = 3.21;
console.log(pi*2); 

// Primitive data types

let firstName = 'Ranjini'; // string literal
let age = 26; //  number literal
let isemplyed = true // boolean
let salary_status = undefined; // in Js, every var is undefined
let phone_number = null // We can use null to keep things explicitly null 

// Refrence Type:

//1. object

let person = {
    firstName : 'Ranjini', 
    age : 26
}

person.firstName = 'Rani';

console.log(person.age); 

//2. Arrays

let purchasedItems = ['Greengram','waterbottle', 'pen']

purchasedItems[3]='toordal';

console.log(purchasedItems[0])

//3. Functions

function selectedcandidate(name, age) {
    console.log('Selected Candidate is '+name+ " "+ 'aged ' + age)
}

selectedcandidate('Ranjini', 26); 

// Performing task

function cube(number)
{
    return number*number*number;
}

console.log(cube(8));