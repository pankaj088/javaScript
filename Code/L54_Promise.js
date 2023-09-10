

//Promise -  we use for organize things 
let prmse = new Promise(function (resolve, reject) {
    alert("message for aleart")
    resolve(08);
})

console.log("tiday is ")
setTimeout(function () {
    console.log("Hello! print after 2 sec")
}, 2000)

console.log("Date - 16/07/2023")
console.log(prmse)



// lec -55 Promise.then() & catch()
let promise1 = new Promise(function (resolve, reject) {
    alert("message for aleart")
    resolve(08);
})
let promise2 = new Promise(function (resolve, reject) {
    alert("message for aleart_1")
    reject(new Error("i am an error"))  // yai error print kariga
})

setTimeout(function () {
    console.log("Hello! print after 5 sec")
}, 5000)

console.log(promise1, promise2)

// then()
promise1.then((value) => {
    console.log(value);
})

// catch() - error ko hatane kai liye use karte hai
promise2.catch((error) => {
    console.log("error oucur in promise2")
})



// L-56:- Promise changing.then()
let pankaj = new promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Hello! print after 2 sec")
        resolve(08)
    }, 2000)
})

pankaj.then((value) => {
    console.log(value)

    let pankaj2 = new promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise print after 3 sec")
        }, 3000)
    })
    return pankaj2;
}).then((value) => {
    console.log("we are Done")
})


// L- 57:- Multiple Handler 
let p = new Promise(function (resolve, reject) {
    console.log("Date-17/07/2023");
    setTimeout((value) => {
        console.log("1 sec bad print kariga")
    }, 1000)
})
p.then(() => {
    console.log("today is monday");

    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("print after 3 sec")
            resolve(08)
        }, 3000)
    })
}).then((value) => { console.log(value) })

p.then(() => {
    console.log("this promise is now resolved");
})



// L-58  Promise API
let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value1")
    }, 1000)
})

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value2")
    }, 2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value3")
    }, 3000)
})

// 3 no ak ak kar value find kiya
prom.then((value) => {
    console.log(" promise1 print after 1se")
    console.log(value)
})

prom1.then((value) => {
    console.log(" promise2 print after 2se")
    console.log(value)
})

prom2.then((value) => {
    console.log(" promise3 print after 3se")
    console.log(value)
})

//  promise ka API 

// 3 no ko ak sath promise.all() se resolve kar sakte hai Array bana kar
let p_all = promise.all([prom, p1, p2])
p_all.then((value) => {
    console.log(value)
})

// promise.allSettled karne se agar bich me error bhi aa jata hai to bhi ak sath print kariga  
let p_all_Steld = promise.allSettled([prom, p1, p2])
p_all_Steld.then((value) => {
    console.log(value)
})

//promise.race() karne se yai 3 mai sai jo pahle resolve ho jaye use ko print kariga
let p_rce = promise.race([prom, p1, p2])
p_rce.then((value) => {
    console.log(value)
})

//promise.any():- wait karta hai resolve hone ka agar yai 3no mai se kue ak bhi resolve ho jaye :agar 3no error deta hai to Aggregated error dega
let p_ay = promise.any([prom, p1, p2])
p_ay.then((value) => {
    console.log(value)
})