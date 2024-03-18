// FUNCTION

function hello(){
    console.log("hello milky");
}

hello();
hello();
hello();

function print1to5()  {
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

print1to5();


function isAdult(){
    let age = 18;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}

isAdult();

// PRINT POEM

function printPoem(){
    console.log("Twinkle Twinkle little star");
}

printPoem();

// FUNCTION TO ROLL A DICE

function printRandom(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);
}


printRandom();
printRandom();
printRandom();
printRandom();
printRandom();
printRandom();
printRandom();


// FUNCTION WITH ARGUMENTS

function printName(name,age){
    console.log(`${name}'s age is ${age} `);
}


printName("milky", 21);
printName("raj", 26);
printName("mky", 23);
printName("ankit", 21);
printName("karan", 25);
printName("namrata");


// FUNCTION AVERAGE

function average(a,b,c){
   let avg = a+b+c/3;
    console.log(avg);
}

average(3,5,6);


// MULTIPLICATION  Table FUNCTION
 
function printMul(n){
    for( let i=n; i<=n*10; i=i+n){
        console.log(i);
    }
}

printMul(5);

//  RETURN VALUE
 

function sum(a,b){
    return a+b;
}

let s = sum(sum(7,6),1);
console.log(s);

// GET sum from 1 to n

function getSum(n){
    let sum = 0;
    for (let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
} 

console.log(getSum(8));

// concatenation of strings in an array

let str = ["hi","this", "is","milky","!"];
function concate(str){
    let result = ""
    for(let j=0; j<str.length; j++){
        result+=str[j];
        }

        return result;
}

console.log(concate(str));

// function expressions
let name = "milky";
let sum =  function(a,b){
    return a+b;
}
 


//  higher order function

function multipleGreet(func,n){  
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet =  function(){
    console.log("hello");
}

multipleGreet(greet,2);

// higher order function -  returns a function

function oddEvenTest(request){
    if(request == "odd"){
        let odd =  function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2 ==0);
        }
        return even;
    }

else { 
    console.log("wrong request");
}
}

let request = "odd";


// odd function
let odd = function(n){
    console.log(!(n%2 == 0));
}


// methods 

const calculator = {
    num:  55, 
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }  
}



let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
//elements larger than a number num
function getElements(arr, num) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] > num) {
console.log(arr[i]);g
}
}
}
getElements(arr, num);


let str8 = "abcdabcdefgggh";
//function to get String with all unique elements
function getUnique(str8) {
    for (let i = 0; i < str.length; i++) {
        let currChar = str8[i];
        if (ans.indexOf(currChar) == -1) {
        //if current character is not added, then add it in
        ans.
        //Otherwise it is a duplicate.
        ans += currChar;
        }
        }
        let ans = "";
        return ans;

}

getUnique(str8);


// JavaScript function to count the number of vowels in a String
let str9 = "apnacollege";
function countVowels(str) {
let count = 0;
for (let i = 0; i < str.length; i++) {
if (
str.charAt(i) == "a" ||
str.charAt(i) == "e" ||
str.charAt(i) == "i" ||
str.charAt(i) == "o" ||
str.charAt(i) == "u"
) {
count++;
}
}
return count;
}




// JavaScript function to generate a random number within a range
let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}



