let score1 = 33 //Veriable Name = score1 33 -> Number
let score2 = "33" //Veriable Name = score2 "33" -> String
let score3 = "33abc" //Veriable Name = score2 "33" -> String (abc Not Conversion)
let score4 = null
let score5 = undefined
let score6 = true
let harsh = "HARSH"

console.log(typeof score1); // number
console.log(typeof(score1)); //Method this pan lakhi sakay

console.log(typeof score2); // string
console.log(typeof(score2)); //Method this pan lakhi sakay

let valueInNumber2 = Number(score2) //number
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // 33

let valueInNumber3 = Number(score3) //Number Output Avi jase pan worgs se
console.log(typeof valueInNumber3);
console.log(valueInNumber3); //NaN

let valueInNumber4 = Number(score4) // Null => Type = number
console.log(typeof valueInNumber4); 
console.log(valueInNumber4); // 0

let valueInNumber5 = Number(score5) // Output = NaN
console.log(typeof valueInNumber5); 
console.log(valueInNumber5); // NaN

let valueInNumber6 = Number(score6) // Type = number 
console.log(typeof valueInNumber6);  //conversion
console.log(valueInNumber6); // OutPut = 1


let valueInNumber7 = Number(harsh) // Not Type
console.log(typeof valueInNumber7);  //conversion
console.log(valueInNumber7); // OutPut = NaN -> Not a Number => Number Conversion Nay Thay..







// "33"=> 33 String 
// conversion karase Number ma
//OutPut = Number

// "33abc" ==> 
// OutPut = NaN
// => Not a Number aa Number Nathi Sathe String Pan Se

// ture => 1; false => 0;



let isLoggedIn = "HARSH" //variable

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "HARSH" => True
// "" => false

let someNumber = 33 //verible

let stringNumber = String(someNumber)
console.log(stringNumber); //Output = 33
console.log(typeof stringNumber); //33 String Ma conversion Thay Gayu Pan Dekhase Number jevu

