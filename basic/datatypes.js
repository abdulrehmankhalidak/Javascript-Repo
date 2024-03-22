//nuber 
// bigint
//string => """
//boolean
//null
//undefined
//symbol


//object

// console.log(typeof null);

// conversion operation in javascript "strict"
// let score= null
// console.log(typeof score)

// let valueNumber = Number(score)
// console.log( typeof valueNumber)
// console.log(valueNumber)


// "33" => 33
// 3abc => NaN
// true => 1 and false=>0

///////////////////////////operation/comparison in javascript////////////////////


// console.log(2>1); simple

// console.log("2" > 1)
// console.log("02" > 1)
// console.log(null > 0)
// console.log(null >= 0)
// console.log(null == 0)    // in comparison javascript converts null into 0 that's why null>=0 is true and equality it treats differently that is why its false

// in summary we should not use above comparisons 

// Primitive data types

// String, Number, Boolean, null, udefined, symbol, BigInt

const score= 100
const scoreValue = 12.3

const id = Symbol('123')

const anotheId= Symbol('123')

// console.log( id === anotheId) false because in symbol it returns unique value if it is same



const isLoggedIn= false
const temp= null




//Non Primitive or reference types

// Arrays, Objects, Functions 


const fruits = ["apple", "mango", "grapes"];

let obj = {
    name: "haris",
    age: 22,
}


const myfunction = function(){
    console.log("hello");
}

