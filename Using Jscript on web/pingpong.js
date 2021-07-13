const slider = document.querySelector('#customRange2');
const maxScore = document.querySelector('#maxscore');
maxScore.innerText = slider.value;
slider.addEventListener("input", () => {
    maxScore.innerText = slider.value;
})

function addScore(button, score){ 
    const buttonEle = document.querySelector(button);
    const scoreEle = document.querySelector(score);
    buttonEle.addEventListener("click", () => {
        slider.disabled = true;
        if(parseInt(scoreEle.innerText) < maxScore.innerText){
            scoreEle.innerText++;
        }else{
            displayWinner('#p1score','#p2score');
            document.querySelector("#p1button").disabled = true;
            document.querySelector("#p2button").disabled = true;
        }
    }) 
}

function displayWinner(p1score, p2score){
    const p1scoreEle = document.querySelector(p1score);
    const p2scoreEle = document.querySelector(p2score);
    const msg = document.querySelector('#message');
    msg.innerText = (parseInt(p1scoreEle.innerText) > 
                     parseInt(p2scoreEle.innerText)) ? 
                    "Player 1 is the winner" :
                    "Player 2 is the winner";
}

const playAgainBtn = document.querySelector('#playagain');
playAgainBtn.addEventListener("click", () => {
    window.location.reload();
})

addScore('#p1button', '#p1score');
addScore('#p2button', '#p2score');
