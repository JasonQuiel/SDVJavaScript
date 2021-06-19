//Loops "iterate(repeat an action multiple times."
//loops require 3 statements initalize counter; test;
let arr = [1,2,3,4,5,6,7]
console.log(arr.length)


//for(i = 0; i < arr.length; i++){

for(i = 0; i < 5; i++) {            
        console.log('hold on to your butts!')
}

for (let i = 0;;/* 1st statement*/ i++)/*3rd statement*/ {
        console.log("loop, i = "  + i);
        if (i > 1)// 2nd statement
            break;
}
let counter = 0;
function inc() { counter++;}for (let i = 0; i < 10; i++, inc())
console.log(counter);

//for ( var i =0; i < 10; ++i) let x = i; error because let is not in a function
//console.log(x)


for (let y = 0; y < 3; y++)        //multiple loops
        for (let x = 0; x < 9; x++)
            console.log(y, x);

for (let m = 0; m < 10; m++) { if (m===4) continue; console.log( m ); } //skips the number 4

let string = 'Jason Quiel';{
    for (let value of string)
        console.log( value );
}

let array = [0,1,2,3,]
    for (let value of array)
        console.log( value );

//let object = { a: 1, b: 2, c: 3 };  Does not work with object
//   for (let value in object)
//        console.log( value )

let object = { a: 1, b: 2, c: 3};
    for (let value in object)
        console.log(value, object)


let z = 0;
while (c++ < 1000)
    if (z > 1)
        continue
            console.log(z);

