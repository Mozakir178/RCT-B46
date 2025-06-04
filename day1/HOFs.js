// Higher Order Functions:

// Higer order functions are the functions are the functions that takes another functions as a parameter, or returns another function, or both


// 2 functions will be envolve

// 1st -> main function
// 2nd -> helper function


//helper function
// function greet(name){
//     return `Hello ${name}` ;
// }

// function processUerInput(callback){
//     const name = "Nikhil" ;
//     console.log(callback(name));
// }

// processUerInput(greet) ;

// function add(a,b) {
//     return a+b;
// }
// let first = 10 ;
// let second = 20 ;
// add(first,second);

// function processUerInput(){
//     return () => "function returning something" ;
// }



// processUerInput(greet) ;

// Map, reduce, filter, forEach 

// Map: the map is a higer order function in javascript that works on Array, 
// it will not modify the original array but returns a new array;

// const numbers = [1,2,3,4] ;
// // return the square of each number 
// const squares = numbers.map(el => el*el) ;
// console.log(squares) ;
// console.log(numbers) ;


// ForEach: 
// Iterate over the array elements and perform required operations over those elements, it will not return anything
// const numbers = [1,2,3,4] ;
// // print the array element 
// const result = 0 ;
// numbers.forEach( (element ) => {
//     // console,
//      result += element ;

// })
// console.log(numbers) ;

// Filter => higher function function that returns a new filtered array based on certant conditions
// const numbers = [1,2,3,4] ;
// // return even number array
// // filter -> a callback function will be executed for all the element 1 by 1
// // if callback return true, then element will be included in the new array else it will be skiped 
// const evenNumbers = numbers.filter(element => element%2 == 0) ; // callback function should alway return boolean value
// console.log(evenNumbers) ; // 2 and 4
// console.log(numbers) // original array as it is


// Reduce: Reduce HOF is use to reduce an array to a single value 
const numbers = [1, 2, 3, 4, 2, 2, 5, 4];
// frequency using reduce 
// const sum = numbers.reduce((acc, curr) => acc + curr , 0)
// console.log(sum)
// const singleValue = numbers.reduce((acc, curr) => {
//     if(acc[curr]) {
//         acc[curr]++
//     } else {
//         acc[curr] = 1
//     }
//     return acc ;
// }, {})
// console.log(singleValue);













// Import / Export:

// Import and export are used in JavaScript to share code between files - a key fetatue introduce in ES6 2015

const add = (a,b) => a + b ;

const mul = (a,b) => a* b ;

// const first = add(10,20) ;
// const first2 = add(10,10) ;
// const first3 = add(15,20) ;
// const first4 = add(5,20) ;

export {add , mul} ;








