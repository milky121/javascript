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


let username = prompt("enter your username: ");
let AGE2 = prompt("enter your AGE2 :");
console.warn(username,"is", AGE2,"years old" );


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