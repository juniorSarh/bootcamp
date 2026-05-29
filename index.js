// // Primitive Data Types
// // 1. string 
// let name = 'codetribe'
// const course = 'javascript'

// //name = 'mlab'

// //course = 'typescript'

// //console.log(course)

// // let x = name + " " + course

// // console.log(name + " " + course)

// // 2. Number

// let x = 12 // interger

// let y = 3// decimal (float)



// // arithmatic operators (+,-,*,/,%,**)

// let z = 0

// //z = x + y // addition

// //z = y - x  // subtraction

// //z = x * y // multiplication

// //z = x / y // Division

// //z = x % y //remainder (modulus)

// z = x ** y // expponetiation (10 to the power 3)

// console.log(z)

// assigment operator

// let x = 12 

// x *= 3
// //x = x + 3


// console.log(x)

// comparison (equality, inequality, relational)

// equality 

// let a = 10 // integer

// let b = '10' // string 

// //console.log(a == b) // loose equality - it only check the value of variable
// console.log(a === b) // strict equality - it checks both value and data type

// inequality 

// let w = 10
// let q = 25

//console.log(w != q) // loose inequality 
//console.log(w !== q) // strick inequality

// Relational (<,>,<=,>=)

//console.log(w > q)
 //console.log (w<q)
 //console.log(w <= q)
//console.log(w>=q)

// Logical Operator
// using AND (&&), OR (||), NOT (!)

// let isParticipant = false
// let isAccepted = true

// //console.log(isParticipant && isAccepted) // must return true
// //console.log(isParticipant || isAccepted) //must return true
// console.log(!isParticipant) // must return false

// Type operator

// let name = 'Sabelo'
// let age = 18
// let isTeenage = true
// let haveCar 
// let ownHouse = null
// let amount = 123n

// console.log(typeof name) 
// console.log(typeof age)
// console.log(typeof isTeenage)
// console.log(typeof haveCar) 
// console.log(typeof ownHouse)
// console.log(typeof amount) 

// object data types
// arrays and objects

// let fruits = ['mango','apple', 'orange','banana']

// //fruits.push('grapes')
// //fruits.pop()

// // objects - key : value pairs
// let person = {
//     name : 'sabelo',
//     age : 12,
//     gender : 'male',
//     isStudent : true
// }

// console.log(person.age)

// conditional statements 
// if ... else if

// let trafficLight = ''

// if (trafficLight === 'green'){
//     console.log('You are permited to move')
// }
// else if (trafficLight === 'yellow')
// {
//     console.log('caution, be alert!!!')
// }
// else if (trafficLight === 'red'){ 
//     console.log('you are not safe to pass')
// }
// else
// {
//     console.log('It is broken')
// }

// switch statement

// let day = 0

// switch(day){
//  case 1:
//     console.log('monday')
//     break
//  case 2:
//     console.log('tuesday')
//     break
//     case 3:
//         console.log('wednesday')
//         break
//      case 4:
//         console.log('thursday')
//         break
//         case 5:
//     console.log('friday')
//     break
//  case 6:
//     console.log('saturday')
//     break
//     case 7:
//     console.log('sunday')
//     break
//     default:
//     console.log('You entered an invalid day')
    
// }

// Loops
// For loop
//  let number = 1

//  for(let number=1; number < 5; number++) // increment
//  {
//    //console.log(`iteration: ${number}`)
//   }

//   for(let number=5; number >= 1; number--) // decrement
//   {
//     console.log(`iteration: ${number}`)
//    }


// while loop
// let countDecrease = 10

// while (countDecrease > 5){
//     console.log(countDecrease)
//     countDecrease--
// }

// Do while loop

// let countDecrease = 10

// let number = 0

// do {
//     console.log(number)
//     number ++
// }
// while (number < 5)




// let Temperature = "dfn"

// switch(true){

//     case Temperature < 0 :
//         console.log('It is freezing')
//    break

//     case Temperature >= 0 && Temperature <= 15 :
//         console.log('It is cold' )
//    break

//     case Temperature >= 16 && Temperature <= 25 :
//         console.log('It is normal - room temperature')
//    break

//    case Temperature > 25 :
//    console.log('It is warm')

//     default:
//         console.log('Invalid input, it must be a number')
    
// }

const Guessnumber = 5

let userInput;

do 
{
    //userInput = Number(readline.question('Please guess a number between 1 and 10'));
    // const readline = require("readline")
    // const rl = readline.createInterface({
    //     input : process.stdin,
    //     output : process.stdin
    // })
    // const correctNumber = 6

    // function askGuess(){
    //     rl.question("Guess a number between 1 to 10", function (answer){
    //         const guess = Number(answer)
    //         if(guess === correctNumber)
    //         {
    //             console.log('The number you guessed is correct')
    //             rl.close()
    //         }
    //         else{
    //             console.log('wrong number, try again')
    //             askGuess()
    //         }

    //     })

    // }

    if(userInput === Guessnumber)
    {
        console.log('The number you guessed is correct')
    }
    else
    {
        console.log('wrong number, try again')
    }
}
while(userInput !== Guessnumber)

























































































