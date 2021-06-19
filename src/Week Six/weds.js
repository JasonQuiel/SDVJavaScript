let arr = [1, 2, 3, 5, 6, 7, 8]
console.log(arr.length) 


const student = {
    name: "Jason",
    year: "one",
    class: "SDV503"
}
console.log(student.year)
student.name = "bob"

console.log(student)

const obj = {  // {} curly brackets create a new object.
firstName:'Alex',
lastName: 'Martin',
dateOfBirth: '18th of October',
friends: ['Bob', 'Christine']
}
console.log(obj)

const propertyName = 'firstname'; 
const obj1 = {
    [propertyName.toUpperCase()]: 'Alex' //toUpperCase makes propertyName all upper case.
}
console.log(obj1)

const obj2 = {
    firstName: 'ALEX',
    lastName: 'MARTIN',
    printFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  };obj2.printFullName();

  console.log(obj2.printFullName())


 
