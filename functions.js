// declare a function 

function Add(x, y){
    return x + y
}

// call the function
Add() // function being invocked
//console.log(Add(5, 3)) 


// using list (array or object) wtrite function that will get the students marks
// if a student passed or failed


let students = [
{name:'zama', mark:60},
{name:'mbali', mark:50},
{name:'sam', mark:75},
{name:'sabelo', mark:20},
]

// declare 
function studentsResults (studentslist){
    for(let i =0; i < studentslist.length; i++){

        const student = studentslist[i]

        if(student.mark >= 75){
            console.log(student.name + ' - passed with distinction')
        }
        else if (student.mark < 75 && student.mark >= 50)
        {
            console.log(student.name + ' - passed')
        }
        else{
            console.log(student.name + ' - dismally fail')
        }
    }
}

// call 
studentsResults(students)

