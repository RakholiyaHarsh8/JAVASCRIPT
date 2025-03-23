//=================================== Call By Value =================================
// Primitive DataType
//        --> Call By Value.
//        --> Original Data Copy Kari Ne Aape Ano Je data Aave se te 
   // --> 7 Type :- String,  Number, Boolearn, Null, Undefined, Symbol, BigInt


// Symbol :-
//     -->   

const score = 100 //Number Type
const scoreValue = 100.10  //Flot Type

const isLoggedIn  = false //Boolearn Type
const outsideTemp = null //Null Type
let userEmail; //Type in undefined

const bigNumber = 56565656n

//=============================Symbol================
//Aa Seme NAthi 
const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id === anotherId);






//====================================== Call By Reference (Non Primitive  DataType)============

//Array, Object, Functions

const hero = ['THNAKS', 'DIVYA', 'HARSH']; //Array

//Data Koy Pan Hoy  Sake 


//Objects
let myObj = {

    name: "HARSH",
    age:24

}


//==================Variable Functions ====================
const myFunction = function() {
    console.log("Hello Divya");
    
}

console.log(typeof bigNumber); //(typeof E Ak Function Se)
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof hero);




//=======================Master For JS Topic=====================
// 1. Objects
// 2. WebEvent And Browser Event

// =========================== Here's a brief comparison: =======================
 
// Statically typed languages (like Java):
// Type checking is done at compile time.
// Errors are caught early, before runtime.

// Dynamically typed languages (like JavaScript):
// Type checking is done at runtime.
// Errors can occur at runtime, leading to potential crashes. 

// +++++++++++++++++++++++++++++ ++++++++++++++++++++++++++


// Stack Memory -> (Primitive) 
// Primitive DataType
// Je pan Change Thay Te Copy ma Change Thay 
let myYoutubename = "harshcom"

let anotherName = myYoutubename
anotherName = "Kanocom"

console.log(myYoutubename);
console.log(anotherName);





// Heap Memory-> (Non - Primitive)
// Refers Male
//  Je pan Change Thay Te Origalna Value Ni Undar Thay
let user1 = 
{
    email:"user@google.com",
    upi: "user@sbi"

}

let user2 = user1
 
user1.email = "kano@gmail.com" //avi rite value Access Kari sakay

console.log(user1.email); //print
console.log(user2.email); //print