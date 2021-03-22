const person = 'Joe'
switch (person) {
    case 'Jane':
        console.log('Hi Jane')
        break
    case 'John':
        console.log('Hi John')
        break
    case 'Joe':
        console.log('Hi Joe')
        break
    case 'Mary':
        console.log('Hi Mary')
        break
    default:
        console.log('Hi')
        break

}
const mark = 70
switch (mark) {

case 50:
    console.log('C')
    break
case 60:
    console.log('C+')
    break
case 70:
    console.log('B')
    break
case 80:
    console.log('B-')
    break
case 90:
    console.log('A')
    break
case 100:
    console.log('A+')
default:
    console.log('N/A')
}

const foo = 4
switch (foo) {
    case 1:
        case 2:
            case 3:
                case 4:
                    console.log('I like this number')
                break
    case -1:
        case -2:
            console.log('I love this number')
                break
    default:
        console.log('I don\'t like this number')
}

const goo = 1;
let output = '';
switch (goo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break; //Keeps going until it hits this break.
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

let applicant = {
    name: 'tony',
        age: 17,
            driver: null
}
if (applicant.age >=16){
        applicant.driver = 'Yes'
} else {
    applicant.driver = 'no'
}
console.log(applicant.driver)

applicant.driver = applicant.age >=16 ? 'Yes' : 'No'
console.log(applicant)

let x = 5
let y = 5 <= x ? 5 + 5 : x
console.log(y)

let isStudent = 8
let isGeneral = 12
switch (isStudent) {
    case 12:
       console.log('General Admission')
            break
    case 8:
        console.log('Student Admission')
            break
}


let price = isStudent ? `price is 8` : `price is 12` 
console.log(price)