
//Values and variables
//Review

let country = "New Zealand"
//declare a variable (let), named that variable (country), assigned a string ("New Zealand")
let city = "Nelson"
//declare a variable (let), name that variable (city), assigned a string ("Nelson")
let postalCode = 7010
//let (variable) postalCode (name of variable) 7010 (assigned as a number)

//Prints information to console
console.log(typeof country)  //typeof shows the data type (string)
console.log(city)
console.log(postalCode)

let isIsland = true
let language  //undefined Variable

console.log(isIsland) //typeof isIsland is a boolean
console.log(language)

language = "Arabic"  //Now a defined variable from line 17
console.log(language)

let number = 10
console.log(number)

console.log(number /2)
console.log(number > 6)
console.log(number < 2)

const address = country + " " + city + " " + postalCode  //Three variables combined
console.log(address)

let string = `My address is ${country}, ${city}, ${postalCode}.` //String template. Keep in mind ` `
console.log(string)

let x = 10;
// If statements ensures data types are correct.
if (x < 10) {
    console.log('Jason') }
    else {
        console.log('its false')
    }
let y = 15

if (y > 10) {
    console.log('just some text')}
else {
    console.log('its false')
}
// x === 10 is a hard equality
if (x = 10 || typeof 'string') { 
    console.log('this is true')
}
else {
    console.log('Error')
}
//  || is or and && and
