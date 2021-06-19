let a = 5  //primitive number
let b = a //non-primitive data type

let c = true //boolean
let d = false //boolean
let e = null //null 


for(b = 0;  b < 5; b++) {            
        console.log('hold on to your butts!')
}

//for of loop
let string = 'Jason'
for (let value of string)
console.log(value)



// for in loop
let object = { a: 1, b: 2, c: 3, method: () => { } };
for (let value in object)
console.log(value, object[value]);



const mail = {
    Address: 123, 
    Street: 'fake', 
    Postal:7020
}
for (let prop in mail ) {
   console.log(`mail.${prop} = ${mail[prop]}`); 
}

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}



let z = 0;
while (z++ < 1000)
    if (z > 1)
        continue
            console.log(z);

let r = 1
    while (r < 2) {
        r++
        console.log(r)
    }