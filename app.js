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

// let string3 = prompt("hey there!!!!");
// if(string3==0){
//     console.log("blank string");
// }

// else{
//     console.log("string entered");
// }



// LOOPS

// FOR LOOP

 
 for(let i = 1; i<=5;i++){
    console.log(i);
 }

//  odd NUMBERS

for(let j=1;j>=15;j=j+2){
    console.log(j);
}

// EVEN NUMBER

for(let m=2;m>=10;m=m+2){
console.log(m);
}

// PRINT MULTIPLICATION OF 5

for(let k=5;k<=50;k=k+5){
    console.log(k);
}

// let n = prompt("enter the number");
// n = parseInt(n);
// for(let h=n;h<=n*10;h=k=h+n){
//     console.log(h);
// }

//  WHILE LOOP

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let m =0;
while(m<=20){
    console.log(m);
    m++
}

// BREAK STATEMENT

let f = 1;
while(f>=5){
    if(f==3) {
        break;
    }
    console.log(f);
    f++
}


// const favMovie = "avatar";
// let guess = prompt("guess my favourite movie");
// while( guess!=favMovie){
//     if(guess=="quit"){
//         console.log("yoy quit");
//         break;
//     }
//     guess= prompt("wrong guesss please try again later");

// }

// if(guess ==favMovie){
//     console.log("congrats");
// }

//  LOOPS WITH ARRAY

let fruitss = ["mango","apple","banana","litchi","orange"];
for(let i=0;i<fruits.length;i++){
console.log(i,fruits[i]);
}



//  FOR OF LOOPS 

let fruitsss = ["mango" ,"apple","banana","litchi","orange"];
for(fruit of fruitsss){
    console.log(fruit);
}

for (char of "apnacollege"){
    console.log(char);
}

//  NESTED FOR OF LOOP

let heroes= [["ironman","spiderman","thor"],["superman","wonder","flash"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}


// js program to delete all occurrences of '2'
let arr5 = [1,2,3,4,5,6,2,3];
let num5 = 2;
for(let i=0;i<arr5.length;i++){
    if(arr5[i] == num5){
        arr5.splice(i,1);
    }
}
console.log(arr5);


// find number of digits in a number
let number1 = 287152;
let count = 0;
let copy = number1;
while(copy>0){
    count++;
    copy =  Math.floor(copy/10);
}
console.log(count);


// sum of digits in a number
let number2 = 287152;
let sum = 0;
let copy1 = number2;
while(copy1>0){
    digit = copy1%10;
    sum+= digit;
    copy1 =  Math.floor(copy1/10);

}

console.log(sum);


// factorial of 5
let n = 5;
let factorial = 1;
for(i=1; i<=n;i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

// find largest number in an given array
let arrays = [2,5,10,4,2,7,1,9];
let largest = 0;
for(let i =0;i<arrays.length;i++){
    if(largest < arrays[i]){
        largest = arrays[i];
    }
}

console.log(largest);

// OBJECT literals

const student = {
    name: "milky",
    age: 21,
    marks: 94.4,
    city: "amritsar"
};

const item2 = {
    price: 100.99,
    discunt: 50,
    colors: ["red","pink"]
};

// Thread/twitter post object

const post = {
    username:"@milkyrani",
    content: "this is my first post",
    likes: 150,
    reposts: 5,
    tags: ["@delta","@apnacollege"]
};

//  GET VALUES

 let student1 = {
    name: "rani",
    marks: 88.2
 };

 console.log(student1["name"]);
 console.log(student1.name);


//  ADD/UPDATE VALUES

const studenttt = {
    name: "milky rani",
    age: 21,
    marks:99.2,
    city: "Amritsar"
};

console.log(studenttt.city = "mumbai");


// OBJECTS OF OBJECTS  

const classInfo = {
    Aman : {
        grade: "A++",
        city: "Delhi"
    },
    Shradha : {
        grade: "A",
        city: "Pune"
    },
    Karan : {
        grade: "O",
        city: "Mumbai"
    },
};

console.log(classInfo);
console.log(classInfo.Aman);
console.log(classInfo.Aman.city);

//  ARRAY OF OBJECTS 

const classInfo1 = [
     {
        name: "aman",
        grade: "A++",
        city: "Delhi"
    },
    {   
        name: "milky",
        grade: "A",
        city: "Pune"
    },
     {
        name: "ankit",
        grade: "O",
        city: "Mumbai"
    },
];


console.log(classInfo1[0]);
console.log(classInfo1[1]);
console.log(classInfo1[2]);
console.log(classInfo1[0]);
console.log(classInfo1[0].name);

//  RANDOM INTEGERS

let ran =  Math.random();
console.log(ran);
  let ran1 = ran*10;
console.log(ran1);
let ran2 = Math.floor(ran1);
console.log(ran2);
let ran3 = ran2 + 1;
console.log(ran3);


//  RANDOM VALUE BETWEEN 1 TO 100

let random = Math.floor(Math.random()*100)+1;
console.log(random);

const max =  prompt(" enter max number");
console.log(max);
const random1 = Math.floor(Math.random()*max)+1;
let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random1){
        console.log("You are right! congrats!!");
        break;
    }

    else if (guess<random1){
        guess = prompt("hint: Your guess was too small!! Please try again");
    }
    else   {
        guess = prompt("hint: Your guess was too large!! Please try again");
    }
    // else{
    //     guess = prompt("Your guess was wrong please try again");
    // }
}





