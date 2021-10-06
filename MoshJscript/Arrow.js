// const square = function(number){
//     return number * number;
// }

const square = number => number * number;

const colors = ['red', 'green', 'blue'];

const colorsWithLi = colors.map(color => `<li>${color}</li>`);

colorsWithLi.forEach(colorWithLi => console.log(colorWithLi));