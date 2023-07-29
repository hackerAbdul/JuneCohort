//spot the issue

const age = 24
var occupation = "working"

if (age>21 && occupation ==="student"){
    console.log("no stable income so you do not qualify")
}else if (age>21){
    console.log("stable income and you qualify")
}else{
    console.log("sorry you are too young")
}

/*create a condition statement for grading papers score 90 and above is A*
score above 80 is A
score above 70 is B
score above 60 is C
and anything below is a fail */

var score = 90
// console.log(typeof score)
// if(typeof score === "number"){
//     if (score>=90){
//         console.log("A*")
//     }else if(score>=80 && score<90){
//         console.log("A")
//     }else if(score>=70 && score<80){
//         console.log("B")
//     }else if(score>=60 && score<70){
//         console.log("C")
//     }else{
//         console.log("fail")
//     }
// }else{
//     console.log("error")
// }

switch (score){
    case score>=90:
        console.log("A*")
        break;
    case score>=80 && score<90:
        console.log("A")
        break;
    case score>=70 && score<80:
        console.log("B")
        break;
    case score>=60 && score<70:
        console.log("C")
        break;
    case score<60:
        console.log("fail")
        break;
    default:
        console.log("error")
}
