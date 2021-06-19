//two arguments, returned in an array.
//function newArray(a,b) {          // Parameters are (a,b)
//   let arrOne = [a, b]           // pass [a, b] in array
//        return arrOne
//}
//console.log(newArray(1, 2))

//let newArray = (a,b) => [a,b]
//console.log(newArray(1, 'Jason'))

//let newArray = (... a) => a         //The spread operator ...
//console.log(typeof newArr)          //returns what it is = function
//console.log(newArray(1, "Jason", 3, 5, 6, 56,))

//let arrTwo = ['Jason', 4, 5, 7, 8] 
//    console.log(arrTwo[0], arrTwo[2])  //returns two numbers of the array from the index

//forEach
//Array = [2]
//function oddOrEven(x) {
//   let sum = 0;
//      x.forEach(num => sum += num)
 //           return sum%2 === 0 ? 'even' : 'odd'  //%2 remainder
//}
//console.log(oddOrEven([1,2,3,4,4]))


//function oddOrEven(x) {
//    let sum = 0;
 //       for(let i = 0; i < x.length; i++)
 //           sum += x[i]
//        if (sum%2 === 0) {
//            return 'even'
//            }   else {
//            return 'odd'
            //}
//}

//console.log(oddOrEven([1,2,3,4,5]))


//function stringToNumber(arr) {
 //   return arr.map(x => Number(x));
//}
//console.log(stringToNumber(["9.4", "4.2"]))

//function stringToNumber(arr) {
//    newArr = []
 //       arr.forEach((x) => {
//            newArr.push(parseInt(x))
//        })
//            return newArr
//}
//console.log(stringToNumber(["9.4", "4.2"]))

//[1,2,3,4,5] = "12345"
//function arrayToString(arr) {
//    let text = ""
//     for(let i = 0; i < arr.length; i++) {
 //       text += arr[i]
 //   }
 //   return text
//}
//let example = arrayToString([1,2,3,4,5])
//console.log(example)
//console.log(typeof example)

//.join is a method
//function arrayToString(arr) {
//    return arr.join('')
//}
//console.log(arrayToString([1,2,3,4,5]))

// ('hello') = ('olleh')

//function stringBackwards(x) {
//   let arr = x.split('')
//   let newArr = arr.reverse()
//   let joinNewArr = newArr.join('')

// return joinNewArr
//}
// console.log(stringBackwards('Jason'))