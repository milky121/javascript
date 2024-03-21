// forEach
let arr = [1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);


let arr1 = [
    {name: "aman",
    marks: 95,
    },
    {
        name:"milky",
        marks:94.4,
    },
    {
        name:"namrata",
        marks:92,
    },
];
arr1.forEach((student) => {
    console.log(student.marks);
});

// map

let num = [1,2,3,4];
let double = num.map((el) =>{
    return el*2;
});

// filter

let num1 = [1,2,3,4,5,6,7,8];
let ans = num1.filter((el) =>{
    return el%2 == 0;
});


//  reduce
let nums = [1,2,3,4];
let finalVal = nums.reduce((res, el) =>{
    console.log(res);
    return res+el;
});
console.log(finalVal);

//  find max in array using reduce 

let nums1 = [2,3,4,5,3,4,7,8,1,2];
let result = nums1.reduce((max, el) => {
    if(el > max){
        return el;
    }else{
        return max;
    }
});
console.log(max);


// all numbers are multiple of 10 or not

let nums2 = [10,20,30,40,50];
let ans1 = nums2.every((el) => el%10 ==0);
console.log(ans1);

// find minimum number

let number = [10,20,30,40,5];
let min = number.reduce((min,el) =>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

// default parameters

function sum(a,b = 3){
    return a+b;
}
sum(2);

// spread

 const data = {
    email: "ironman@gmail.com",
    password: "abcd",
 };
 const dataCopy = {...data,id:123};
 console.log(dataCopy); 

//  rest

 function sum(...args){
    for (let i = 0; i < args.length; i++){
        console.log("you agave us", args[i]);
    } 
 }

 function min(msg, ...args){
    console.log(msg);
    return args.reduce((min,el) =>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
 }

//  destructuring in objects

const student1 = {
    name: "milky",
    age: 21,
    class: 12,
    subjects: ["hindi","english","maths","science"],
    username: "karan@gmail",
    password: "abcd",
};

let {username: user, password: secret, city= "mumbai"} = student;