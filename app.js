console.log("Hey");
let pencilePrice = 10;
let eraserPrice = 5;
// console.log("The Total price is: ", pencilePrice + eraserPrice, " Rupees.");

// let output = "The Total price is: " + (pencilePrice + eraserPrice) + " Rupees. ";
// console.log(output);

// let output = `The Total price is : ${pencilePrice + eraserPrice} Rupees.`;
// console.log(output);

console.log(`The Total price is : ${pencilePrice + eraserPrice} Rupees.`);


// ARITHMETIC OPERATORS

let a = 10;
let b = 5;
b=a;
console.log(b)
// console.log(a++);
// console.log(++a);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);


// COMPARISON OPERATORS

let age =18;
console.log(age>18);

// LOGICAL OPERATORS
let markss = 90;
if(markss>=33 && markss>=80){
    console.log("pass");
    console.log("a+");
}


// CONDITIONAL IF

console.log("before my if statement");
let age1=23;
if(age1>=18){
    console.log("you can vote");
    console.log("you can drive");
    let m =5;
    console.log(5*m);
}

if(age1>20){
    console.log("you are in your 20s");
}
console.log("aftre my if statement");


let firstname = "milky";
if(firstname == "milky"){
    console.log(`Welcome ${firstname}`);
}


let color="red";
if(color=="red"){
    console.log(" color is red:STOP!!");
}
if(color=="yellow"){
    console.log("READY to go");
}
if(color=="green") {
    console.log("GO");
}
else{
    console.log("traffic light is broken");
}


// CONDITIONAL ELSE

let age2=10;
if(age2>=18){
    console.log("you can vote");
}

else{
    console.log("you cannot vote");
}

// NESTED IF ELSE

let marks = 20;
  if(marks>=33){
    console.log("pass");
    if(marks>=80){
        console.log("Grade: A");
    } 
    else{
        console.log("Grade: B");
    }
  }
  else{
    console.log("better luck next time");
  }

let string= " ";
if(string){
    console.log("string is not empty");
}

else{
    console.log("string is empty");
}

// SWITCH STATEMENT

let colour ="blue";
switch(colour){
    case "red":
        console.log("stop");
        break;
        case "yellow":
            console.log("slow down");
            break;
            case "green":
                console.log("go");
                break;
            default:
                console.log("traffic light broken");

}

// ALERT AND PROMPT

// alert("something is wrong");
//  console.log("this is a simple log");
//  console.error("this is an error");
//  console.warn("this is warning")


// let firstnamee = prompt("enter  your name : ");
// console.log(firstnamee);


// let first = prompt("enter your first name :");
// let last = prompt("enter your last name :");
// console.log( "Welcome",first, " "  ,last, "!");

let str = "apple";

if(str[0] === "a" &&  str.length > 3){
    console.log("Good string");
}
else{
    console.log("not a good string");
}

let num = 12;
if((num%3===0) && (num+1==15) || (num-1==11)){
    console.log("safe");
}
else{
    console.log("unsafe")
}


//  NUMBER IS DIVISIBLE WITH 10 OR NOT

let number = 20;
if(num%10){
    console.log("It is divisible");
}

else{
    console.log("It is not divisible");
}


// let username = prompt("enter your username: ");
// let AGE2 = prompt("enter your AGE2 :");
// console.warn(username,"is", AGE2,"years old" );


let quater = 1;
switch(quater) {
    case 1: 
    console.log("January", "February", "March");
    break;
    case 2:
        console.log("April", "May", "June");
         break;
    case 3:
        console.log("July", "August", "September");
         break;     
    case 4 :
        console.log("October", "November", "December");
         break; 
    default :
        console.log("out of quarter");
}


let str1 ="ankitaaa"
if(str[0]==="A" || str[0]==="a" && str1.length>5){
    console.log("it is a golden string");
}

else{
    console.log("please enter another statement");
}


let x = 100;
let y = 67;
let z = 89;
if(x>y){
    if(x>z){
        console.log("x is a largest number ");
    }
    else{
        console.log("z is largest");
    }
}

else{
    if(y>z){
        console.log("y is largest number");
    }
    else{
        console.log("z is largest");
    }
    
}

let v = 32;
let w = 48752;
if((v%10) == (w%10)){
    console.log("It has same last digit which is",v%10);
}
else{
    console.log("please enter another number");
}


// STRING METHODS

 
//  let password = prompt("set your password");
//  let newpass = password.trim();
//  console.log(newpass);


 let name = "apnacollege";
 console.log(name.toUpperCase());



 let myname = "vishnu";
 console.log(myname.indexOf("h")); 

// METHOD CCHAINING
 let mess = "  asimplemessage   ";
 let newMsg = mess.trim().toUpperCase();


//  SLICE METHOD

let str4= "ILoveCoding";
console.log(str4.slice(1,4));

// REPLACE

 let str5 = "MY name is milky";
 console.log(str5.replace("name","Self"));


//  REPEAT

let str6 = "MANGO";
console.log(str6.repeat(5));

// PRACTICE QUESTIONS

let message = "   help  ";
 let newOne= message.trim().toUpperCase();
 console.log(newOne);



//  ARRAY

let students = ["milky","mummy","papa" ];
let info = ["milky",22,"rani"];
let empty  = [];

// ARRAYS ARE MUTABLE

let fruits = ["mango","litchi","apple"];
fruits[0] = "banana";
console.log(fruits);

//  ARRAY METHODS

let cars = ["toyota", "bmw"];
cars.push("jaguar","fortunar");
cars.pop();
cars.unshift("ferrari"); 
cars.shift();

console.log(cars);

// PRACTICE QUESTION

let months = ["january","july","march","august"];
months.shift();
console.log("january removed");
months.shift();
months.unshift("june");
months.unshift("july");

// methods


let primary = ["red","yellow","blue"];
let method = primary.indexOf("yellow")
let includes = primary.includes("blue");
console.log(method);
console.log(includes);

let primary1 = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];
let mix = primary1.concat(secondary);
console.log(mix);
let mix1= primary1.reverse();
console.log(mix1);

// SLICE ARRAY

let colors = ["red","blue","yellow","green"];
let one = colors.slice(2);
console.log(one);

// SPLICE ARRAY

let colours = ["red","yellow","blue"];
colours1 = colours.splice(0,1);
console.log(colours1);
console.log(colours);

// SORT

let days = ["monday","sunday","wednesday","tuesday"];
let days1 = days.sort();
console.log(days);

// nested array
let digit = [ [2,4], [3,6] , [4,8] ];
console.log(digit);

// PRACTICE 

let tic = [ ["X",null,"O"] ,[null,"X",null] , ["O",null,"X"] ];
console.log(tic);

// ELEMENTS EXIST IN AN ARRAY OR NOT

let arr1 = ["milky",'b',23,43,56,32];
let item = 99;
if(arr1.indexOf(item) != -1){
    console.log("elements exists in an array");

}

else{
    console.log("elements does not exists in an array");
 
}

// LEADING AND TRAILING SPACES OF A STRING

// let string1 = prompt("enter a string");
// console.log(`string with spaces = ${string1}`);
// console.log(`string without spaces = ${string1.trim()}`);

// CHARACTER IS IN LOWERCASE

let string2 = "MiLkyColLGE";
let idx = 0;
if(string2[idx]== string2[idx].toLowerCase()){
    console.log("character is lowercase");
}

else{
    console.log("character is not in lowercase");

}

// WHETHER THE STRING IS BLANK OR NOT

let string3 = prompt("hey there!!!!");
if(string3==0){
    console.log("blank string");
}

else{
    console.log("string entered");
}





