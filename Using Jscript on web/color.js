const btn = document.querySelector("#changecolor");
const displaytext = document.querySelector("#displaytext");

btn.addEventListener('click', () => {
    let num1 = rand(255);
    let num2 = rand(255);
    let num3 = rand(255);
    let color = `rgb(${num1},${num2},${num3})`;
    displaytext.innerText = color;
    document.body.style.backgroundColor = color;

});

function rand(range){
    return Math.floor(Math.random() * range + 1);
}