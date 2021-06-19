//create a function that concatenates n input arrays, where n is variable.
//firstFunc([1,2,3,],[5,6,7],[8,9,10]) => [1,2,3,4,5,6,7,8,9,10]


// function firstFunc(...args)
// let result = [];    //empty array
//     for(let i = 0; i < arguments.length; i++) {
//         result = result.concat(arguments[i])
//     }
// return result

// //ES6
// function esSixFunc(... args) {
//     return [].concat(...args)
// }

// a function that takes two arguments (number, length)
// secondFunc(7,5) => [7,14,21,28,35]  (seven multiply 5 times)

// function secondFunc(number, length) {
// let result = []
//         for(let i = 1; i <= length; i++) {
//           result(number * i)  
//     }  
// return result      
// }            

//ES6
// function esSecondFunc(number, length){
//     return [...Array(length).keys()].map((e, i) => (e + l) * number)
// }

//create a function that takes an array of numbers and string, return an array of number sorted in
//ascending or descending order.
// function sortFun(arr, str) {
//  switch(str) {
//     case 'ascending':
//         return arr.sort((a,b) => a - b)
//         break;
//     case 'descending':
//         return arr.sort((a, b) => b -a)
//         break;
//     default: return arr
//  }
// }
//ES6

// const esSortFunction = (arr, str) => 
//     str === 'Ascending' ? arr.sort((a, b) => a - b) : 
//         str === 'Descending' ? arr.sort((a, b) => a - b) :
//             arr


//create an function that returns true if all params are true otherwise return false.
//trueOrFalse(true, true, true, 0) => false

// const trueOrFalse = (...args) => args.every(Boolean)  //check everyone data type if same = true or if any data type is false return false.

//create a function that takes three arguments (x, y, z) and returns an array containing a n number
//of the sub arrays.
//each sub array containing item within

// function subArray(x, y, z) {
//     return Array(x).fill(Array(y).fill(z))
// }
//subArray(3,2,3) -> [[3, 3],[3,3],[3,3]]

