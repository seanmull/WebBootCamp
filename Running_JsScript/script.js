// let x = Math.random();

// if(x < .5){
//     console.log("Hello world1");
// }

// const dayOfWeek = 'Tuesday';

// if(dayOfWeek === 'Monday'){
//     console.log("hate mondays")
// }else if(dayOfWeek === 'Tuesday'){
//     console.log('not to bad');
// }

//const userInput = prompt("Enter someting");

// if(userInput){
//     console.log("TRUTHY")
// }else{
//     console.log("FALSY!")

// }

const password = prompt("Enter you password");

if(password.length >= 6 && password.indexOf(" ") === -1){
    console.log("VALID PASSWORD")
}else{
    console.log("not valid");
}