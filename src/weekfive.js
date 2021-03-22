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

