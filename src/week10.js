//creating a function that takes two numbers and return the results.

function calFunc(num, operator, num2) {
    operation = {
        '+': (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    return operation[operator](num, num2)  //returns two numbers

}
console.log(calFunc(3, '+', 4))  //calls the function(num, operator, num2)

//create a function that takes an array and returns the sum of items in the array.  
//The item in an array can be another array
//sum([1, [2, [1]], 3])

function sumFunc(arra) {
    return arra.flat(Infinity).reduce((a,b) => a + b) //flat can combine sub arrays into a single array.
}
console.log(sumFunc([1, [2, [1]], 3]))

//create a function that takes multi dimensional array, convert into a one dimensional array and return it using recursion.
//flatten([[17.5, "SDV503"] 13, ])
const flatten = (multiarray) => {
    const result = [];
        multiarray.forEach(element => {
            Array.isArray(element) ? result.push(...flatten(element)) : result.push(element) //keeps looping through the array and flattening it by going through the func by the ... spread operator.

        })
}

//create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
//getDepth({a: 1})

// getDepth = ([1, [2, [3,[4, [5]]]]])

const getDepth = obj => {
    let level = 1

    Object.keys(obj).forEach(key => {})  //call back function
    if(typeof obj[key] === 'object') {
        const depth = getDepth(obj[key]) + 1
        
        level = Math.max(depth, level) //Math.max function largest of the zero or more numbers
    }
return level    
}
/* create a function that can nest a flat array to represent an incremental depth level sequence.
the elements do not matter to the function, you should increment by index.
expect the array length to be from 2 -20 
*/

//createDepth([1,2]) should make [1, [3]]

function createDepth(arrayD) {
    if(arrayD.length === 1) return arrayD
    return [arrayD[0]], createDepth(arr.slice(1))
}


