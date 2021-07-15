// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() =>{
//             if(rand < 0.5){
//                 resolve('YOUR FAKE DATA HERE');
//             }
//                 reject("REQUEST ERROR");
            
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then((data) => {
//     console.log("DONE WITH REQUEST");
//     console.log("data is:", data);
// })
// .catch((err) => {
//     console.log("OH NO!", err)
// })

// async function hello(){

// }

const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'LA LA LA LA'
}

sing()
    .then((data) => {
        console.log("Prints with", data);
    })
    .catch((err) => {
        console.log("Promise rejected with", err)
    })


     const login = async (username, password) => {
        if(!username || !password) throw "missing credentials"
        if(password === 'corgifeetarecute') return "welcome"
        throw 'Invalid password'
    }

    login('skldfjaskljf', 'corgifeetarecute')
        .then(msg => {
            console.log("Logged in!")
            console.log(msg)
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        })

