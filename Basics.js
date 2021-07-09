// function add(x,y){
//     return x + y;
// }

// // console.log(add(1,2));

// function random(start, end){

//     return Math.floor(Math.random() * end) + 1;
// }
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

// const person = {
//     first: 'Sean',
//     last: 'Mull',
//     fullName(){
//         return `${this.first} ${this.last}`
//     }
// }

// console.log(person.fullName());

// function yell(msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//     }catch(e){
//         console.log(e);
//         console.log("Please pass in a string");
//     }
// }

// yell(3);

// const nums = [1,2,3];

// nums.forEach(function(ele){
//     console.log(ele);
// });

// const letters = ['a','b','c'];
// const caps = letters.map(function(t){
//     return t.toUpperCase();
// })

// console.log(caps);

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// const firstNames = fullNames.map(function(fullName){
//     return fullName.first;
// })

// console.log(firstNames);

//  const add = function(x,y){
//      return x + y;
//  }

//  const add = (x,y) => {
//      return x + y;
// }

// const square = (x) => {
//     return x **2;
// }
// const num = add(3,4);
// console.log(num);

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }



// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// );

// console.log(rollDie());

// setTimeout(() => {
//     console.log("Hello")
// }, 3000)

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// clearInterval(id);

// const nums = [1,2,3,4];
// const odd = nums.filter((num) => num % 2 != 0)
// console.log(odd);

// const arr = ['mark', ';lksdj;fkjas;df', 'tim', 'lskdjf'];

// function validUserNames(usernames){
//     return usernames.filter((name) => name.length < 10)}

// console.log(validUserNames(arr));

// const arr=  [1,2,3,4];

// console.log(arr.every((num) => num < 4));

// console.log(arr.some((num) => num < 4));

// const arr = [12,2,3,4,5];

// console.log(arr.reduce((acc,cur) => acc + cur))

// console.log(arr.reduce((min,num) => Math.min(min,num)));

// function rollDie(numSides = 6){
//     return Math.floor(Math.random() * numSides) + 1;
// }

// console.log(rollDie(20));

// const nums = [1,2,3,4];

// console.log(Math.max(...nums));

// const nums2 = [5,6,7,8];

// const allnums = [...nums,...nums2];

// console.log(allnums);

// function sum(){
//     return arguments.reduce((total,num) => total+num)
// }

// function sum(...nums){
//     return nums.reduce((total,el) => total + el)
// }

// console.log(sum(3,4,5));

// const arr = [4,3,2,1]

// const [high, mid, lo] = arr;

// console.log(high,mid,lo);

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // Only change code below this line 
//   const half = ({max,min}) => {(max+min)/2};
//   // Only change code above this line

//   console.log(half(stats));

