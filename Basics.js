function add(x,y){
    return x + y;
}

// console.log(add(1,2));

function random(start, end){

    return Math.floor(Math.random() * end) + 1;
}
// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));



// let x = 0;
// function printnum(){
//     x = 3;
// }
// console.log(x);
// printnum();
// console.log(x);

// let x = 9;
// function changex(){
//     let x = 10;
// }
// console.log(x);
// changex();
// console.log(x);

// function x(){
//     const arr = [1,2,3,4];
//     function y(){
//         for(let val of arr){
//             console.log(val);
//         }
//     }
//     y();
// }

// x();

// const square = function(num) {
//     return num*num
// }

// console.log(square(7));

// function callTwice(func){
//     func();
//     func();
// }

// function rollDie(){
//     const roll  = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

// function makeBtw(min,max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }

// console.log(makeBtw(3,50)(20));

// const myMath = {
//     PI : 3.14,
//     square(num){
//         return num * num;
//     }
// }

// console.log(myMath.square(2));

const person = {
    first: 'Sean',
    last: 'Mull',
    fullName(){
        return `${this.first} ${this.last}`
    }
}

console.log(person.fullName());