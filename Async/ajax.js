// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// .then(res => {
//     console.log("RESPONSE, WAITING TO PARSE...", res)
//     return res.json()
// })
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log("OH NO! ERROR", e)
// })

// const fetchBitcoinPrice = async () => {
//     try{
//         const res = await fetch("https://ap.cryptonator.com/api/ticker/btc-usd")
//         const data = await res.json();
//         console.log(data.ticker.price)
//     }catch(e){
//         console.log(e);
//     }
    
// }

// fetchBitcoinPrice();


axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    })

// const fetchBitcoinPrice = async () => {
//     try{
//         const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//         console.log(res.data.ticker.price);
//     }catch(err){
//         console.log("ERROR!", err);
//     }
// }

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const list = document.createElement('li');
    list.innerText = jokeText;
    jokes.append(list);
}


const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com", config)
    return res.data.joke;
}
button.addEventListener("click", () => {
    addNewJoke();
})




