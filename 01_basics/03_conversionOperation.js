let score1 = 11;
let score2 = "11";
let score3 = "11abc";
let score4 = null;
let score5 = undefined;
let score6 = true;
let score7 = false;
let name = "Arpita";
let valueInNumber = Number(score2);
let valueInString = String(score1);
let valueInNum = Number(score3);
let valInNum = Number(score4);
let valInNo = Number(score5);
let numVal = Number(score6);
let numbVal = Number(score7);
let strToNum = Number(name);

console.log(typeof score1);
console.log(typeof (score1));
console.log(typeof score2);
console.log(typeof (score2));
console.log(typeof valueInNumber);
console.log(typeof (valueInString));
console.log(typeof valueInNum);
console.log(score3);
console.log(valueInNum);//NaN
console.log(valInNum);//0
console.log(valInNo);//NaN
console.log(numVal);//1
console.log(numbVal);//0
console.log(strToNum);//NaN

//NaN => Not a Number, but its type is a number

//Hitesh Sir's code
let score = "Hitesh";

console.log(typeof score);
console.log(typeof(score));

let valInNumber = Number(score)
console.log(typeof valInNumber);
console.log(valInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value

console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//** => used for to the power, instead of ^
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " Arpita"
let str3 = str1 + str2

console.log(str3);
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
console.log( (3 + 4) * 5 % 3);//20
console.log(+true);//1, for true+ it'll result in an error, makes no sense, don't use it
console.log(+"");//0, makes no sense, don't use it

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;//101,with and without ++
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
