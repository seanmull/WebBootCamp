const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You clicked me");
}

function scream(){
    console.log("AAAAAAAH");
}

btn.onmouseover = scream;

const btn2 = document.querySelector("#v3");

btn2.addEventListener('mouseup', function(){
    alert("clicked!!");
})