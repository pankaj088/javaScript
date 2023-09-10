

// async and await dono promise return karta hai

async function p() {
    return "Date - 19/07/2023"
}
p().then((x) => {
    alert(x)
})


// asyanc & await
async function Weather() {

    let Bihar_weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Garmi")
        }, 1000)
    })

    let Delhi_weather = new promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Barish")
        }, 2000)
    })

    // Bihar_weather.then(alert);
    // Delhi_weather.then(alert);

    let B_w = await Bihar_weather
    let D_w = await Delhi_weather
    return [B_w, D_w]
}
console.log("Welcome in")
Weather();



// L-60 :- Error handling
// try and catch() 

setTimeout(() => {
    console.log("P")
}, 1000)

setTimeout(() => {
    console.log("a")
}, 2000)

setTimeout(() => {
    console.log("n")
}, 3000)

// console.log(pankaj) // yase karne se error dega islye hm try & catch() la use karenge

try {
    console.log(pankaj)
} catch (error) {
    console.log("Yai error ko print nhi kariga")
    // console.log(error) // agar error ko dekhna hai kaha error hai to yai karo
}

setTimeout(() => {
    console.log("k")
}, 4000)

setTimeout(() => {
    console.log("a")
}, 5000)

setTimeout(() => {
    console.log("j")
}, 6000)

// L-61 
// Error object and custom error

try {

    let Name = prompt("Enter your name ")
    // Name = Number.parsInt(Name);
    if (Name != "pankaj") {
        throw new ReferencesError("invalid name")
    }
    else {
        console.log("Thank you for write  my name correct")
    }

}
catch (error) {
    console.log(error.name)  // (error.name) -  ReferenceError dega
    console.log(error.message)  // (error.message) -not defined dega
    console.log(error.stack)  // (error.stack)    -  at script.js:78:8 dega
}

// finally() :- try mai error aye or catch me error aye finally kabhi bhi error provide nhi kariga
finally {
    console.log("finally kabhi error dega hi nhi ")
}


// prctice set-9
// Q-3 : create a promise which rejects after 3 minutes Use async and await to get its value use try catch to handle its error
let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        }, 3000)
    })
}

let a = async () => {
    try {
        let b = await p()
        console.log(b)
    }
    catch (err) {
        console.log("this error has been cancled")
    }
}

a()

//Q-4:Write a program using promise.all inside an asyanc/ await 3 promises .c ompare its result with the case where we awiat these promises one by one

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 3000)
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 2000)
    })
}

const run = async () => {
    console.time("run")
    //     let a1 = await p1()
    //     let a2 = await p2()
    //     let a3 = await p3()
    // console.log(a1,a2,a3)


    // use promise.all
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let [result1, result2, result3] = await Promise.all([a1, a2, a3]);
    console.log(result1, result2, result3);
    console.timeEnd("run");
}

run();