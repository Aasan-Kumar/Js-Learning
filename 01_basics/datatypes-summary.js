// Primitive Datatype

// 7 Types: String, Number, null, Boolean, Undefine, Symbol, BigInt

// Reference (Non Primitive)

// Array , Objects ,Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTem = null

let userEmail; //it is automatically Undefine assign
//console.log( userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 1287364387623475252432432432n // BigInt

const cities = ["Hyderabad","Karachi","Lahore"] // Array

//Object
let myObj ={
    name:'Aasan',
    age:'30'
}

const myfunction = function(){
    console.log("Hello World");
}

//console.log(typeof id);

//**********************Memory*************************** */

//Stack(Primitive) .... Heap(Non Primitive)

let countryName = "Pakistan"

let anotherCountry = countryName;

anotherCountry = "Dubai"
//Stact memory
// console.log(countryName);
// console.log(anotherCountry);


//Heap memory
let userOne = {
    email:"aasan@abc.com",
    name: "aasan"
}

let userTwo = userOne 

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);