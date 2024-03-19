 const student = {
    name: "MILKY",
    age: 21,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math  + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

// try and catch statement

console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch{
    console.log("catch an error......a is not found");

}
 console.log("hello");
 console.log("hello");
 console.log("hello");
 

//  miscellaneous topics


// ARROW FUNCTIONS

const sum = (a,b) => {
    console.log(a+b);
};

const cube = (n) => {
    return n * n * n;
};

const pow = (b,j) => {
    return b**j;
};

// SET TIMEOUT 

console.log("hi  there");
setTimeout(  ()=>
{
    console.log("AMRITSAR COLLEGE");
}, 4000);

     console.log("Welcome to");

    //  SET INTERVAL

     let id=setInterval( ( )=> {
        console.log("AMRITSAR COLLEGE");
    }, 2000);

    console.log(id);

// THIS  with arrow function
    

const student1 = {
    name: "namrata",
    marks: 95,
    prop: this, //global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () =>{
        console.log(this); //parent scope
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this); //student
        },2000);
    },
        getInfo2: function () {
            setTimeout( function() {
                console.log(this); //window
            },2000);
            },
        };


//  ARROW FUNCTION THAT RETURN A SQUARE

const square= (m,n) => m**n;
console.log(square(7));
        


// function that prints "hello world" 5 times at interval of 2s
let id1=setInterval( ( )=> {
    console.log("hello world!!!!!!!");
}, 2000);
setTimeout(  ()=>
{
    clearInterval(id1);
    console.log("clear interval runs");
}, 1000);



// arrow function that accepts an array of numbers and return the average of those numbers
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;

    }
    return total / arr.length;

};

let arr = [1,2,3,4,5,6,66];
console.log(arrayAverage(arr));


    // arrow function take single number as an argument and returns if it is even or not
let num = 8;
const isEven = (num) => num % 2 ==0;

