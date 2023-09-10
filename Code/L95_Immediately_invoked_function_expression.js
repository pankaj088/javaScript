

let A = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pankaj")
        }, 3000)
    })
}


// resolve karne kai liye await use karte hai 
let f = async () => {
    let b = await A() // 3 no individual(apne app me alag alag) promise hoga
    console.log(b)

    let c = await A()
    console.log(c)

    let d = await A()
    console.log(d)

}
f()


    // Using IIFE - Immediately invoked function expression
    (
        async () => {
            let b = await A()
            console.log(b)

            let c = await A()
            console.log(c)

            let d = await A()
            console.log(d)

        })()




// Destructing - distenict varible mai agar hm kuch varible ko unpack karna chate hai to kar sakte hai 

let arr = [2, 4, 6, 8, 10, 12]
// let a = arr[0]
// let b = arr[1]
// console.log(a,b)

let [x, y, z, ...rest] = arr
console.log(a, b, c, rest)

//
let { p, q } = { p: 10, q: 20 }
console.log(p, q)

//sepread operator
let arr1 = [3, 6, 9]
let objct = { ...arr1 }
console.log(objct)

//
let objct1 = {
    Name: "Xyz",
    Roll: "54",
    college: "Sit"
}
console.log({ ...objct1, Name: "Pankaj" }) // Name ko overwrite kar de raha hai 
console.log({ Name: "Prabhakr", Roll: "60", college: "iit", ...objct1 }) // yaha overwrite nhi kariga kuki object last mai like hai


//Hosting:-
console.log(a)  // undefined print kariga
uper()
function uper() {
    console.log("Jitna bhi function decleartion hai oo uper aa jata hai agar hm Javascript use kar rahe hai")
}

//Function expression 
var NotHost = function () {
    console.log(" Function expression and class expression are not hoisted")
}
NotHost()


console.log("Javascript variables and class defenation and function definition ko uper Host kar deta hai")

var a = 10;  // Deceleration Hoisted to the top but initialize is not 
console.log(a)


// L-90:-CLOSURE

// Closure :- is a function along with a Lexical Environment // Ak function kai sath uska Lexical Environment Bind hokar milta hai

function closr() {
    var name = " XYZ"
    function displayName() {
        console.log(name);
    }
    name = "ABC"  // name update hokar ABC print hoga
    return displayName;
}

let c = closr()
c()



// Nested function
function returnFunction() {

    const x = () => {
        a = 1;
        console.log(a)

        const y = () => {
            // b = 2;
            console.log(a)

            const z = () => {
                // c = 3;
                console.log(a)

            }
            z()
        }
        a = 99;
        y()
    }
    return x
}


let r = returnFunction()
r()



//Q1:- Write a Javascript program to print "Welcome in Bihar" afte 2 sec

const a = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}

(
    async () => {
        let text = await a("Welcome in")
        console.log(text)

        text = await a("Bihar")
        console.log(text)
    }
)()


//Q2:- Write a Javascript program to find average of numbers in a array using spread syntax
function sum(a, b, c) {
    return a + b + c;
}
let s = [2, 4, 6]
console.log(sum(...s))


// Q3:- Write a simple interest calculator using Javascript 
function Simpleintrest(p, r, t) {
    return (p * r * t) / 100
}
console.log(Simpleintrest(10000, 5, 1))