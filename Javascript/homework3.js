//Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).

var hero = "iron man"

// if (hero === "superman" || hero === "batman" || hero === "ww"){
//     console.log(`${hero} is a dc character`)
// }else if(hero === "spiderman" || hero === "iron man" || hero === "thor"){
//     console.log(`${hero} is a marvel character`)
// }else{
//     console.log(`sorry i dont recognise ${hero}`)
// }

/*
write a conditional statement taking age as variable and what year group they will be in a school (i.e 11-16 will be secondary school year group, 
16-18 college anyone above optional education). (if this does not make sense please watch the summary video or the youtube video pasted above)
*/

const age = -1

if (typeof age === "string"){
    console.log("error")
}else if (age >=11 && age<16){
    console.log("you are in secondary school")
}else if (age>=16 && age<=18){
    console.log("college")
}else if (age>18 && age<90){
    console.log("optional education")
}else if(age<11 && age>3){
    console.log("primary")
}else{
    console.log("error 2")
}




/*Create a shopping list of 5 items. Now make a conditional statement that checks if 
the list contains 5 items only. if above 5 print out error and if less than 5 print out error. 
( would suggest searching greater than and less than operators)*/

var array = true

//nested conditional

// if (typeof array != "object" ||array.length>5 || array.length<5){
//     console.log("error")
// }else{
//     console.log("list has 5 items")
// }


if(typeof array === "boolean" || typeof array === "number" || typeof array === "string" || typeof array === "undefined"){
    console.log("error from here")
}else{
    if(array.length>=5 && array.length<10){
        console.log("list has correct number of items")
    }else{
        console.log("error incorrect number of items")
    }
}