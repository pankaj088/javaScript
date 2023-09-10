

// // fetch API - ak promise return karta hai agar hm ak url de to

// // let p = fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/")
// let p = fetch("https://bhagavadgita.io/api/v1")

// // fetch API ko 2 stage process mai banya gya hai islye double .then() use karte hai

//  p.then((value1)=>{
//     console.log(value1.status)  // 200-299 tak https code agar hai to to sab normal hai
//     // value1.json()  ak promise hai jo ki  resolve hogi json() response me
//     console.log(value1.ok)
//     return value1.json() 

// }).then((value2)=>{
//     console.log(value2)
// })


// response
// let p = fetch("https://bhagavadgita.io/api/v1") 
let prmise = fetch("https://bhagavadgita.io/api/v1/chapters?access_token=YOUR_ACCESS_TOKEN")

prmise.then((response) => {
    console.log(response.status)  // 200-299 tak https code agar hai to to sab normal hai
    // value1.json()  ak promise hai jo ki  resolve hogi json() response me
    console.log(response.ok)
    console.log(response.headers)
    // console.log(response.text()) //yaha hm .text() kar le or .json() karle dono me se kue ak hi run hoga: .text() run karne se ak string milga
    return response.json()  // agar json() run kiye to ak javascript object mil jyiga 

}).then((value2) => {
    console.log(value2)
})