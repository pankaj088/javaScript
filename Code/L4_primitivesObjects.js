
// javascripts mai bult_in 7 types kai primitves_data types hote hai

// yad rakhne ka tarika
// nn           ss              bb                u
//null number    string symbol     bolean bigInt   undefined

let a = null;
let b = 8;
let c = "pankaj kumar"
let d = Symbol("p_k")
let e = true; // or false
let f = BigInt("882000") + BigInt("1")// bara number
let g = undefined;
console.log(a, b, c, d, e, f, g);


// objects javascript mai non-primitive hote hai
// objects in js :- key value pairs bante hai

const item = {
    "pankaj": true,
    "panakj": false,
    "age": 23,
    "college": undefined,
}
console.log(item.panakj);
//or 
// console.log(item["age"]);


// Comparison opertaors
let comp1 = 10;
let comp2 = "10"
// == (equality check karta hai ) :Ex 
console.log(comp1 == comp2)
// ===(equlity chek karta hai but type bhi chek karta hai yaha type string hai islye false return kariga)
console.log(comp1 === comp2)
console.log(comp1 != comp2)
console.log(comp1 !== comp2)
console.log(comp1 > comp2)
console.log(comp1 < comp2)

// Logical operators

let w = 8;
let l = 9;
console.log(w < l && w == 8); // true && true = true
console.log(w > l && w == 8); // false && true = false
console.log(w < l || w == 8); // true || true = true
console.log(w > l || w == 8); // false || true = true
// not(!) operator true ko false or false ko true karta hai
console.log(!true)
console.log(!false)

// prompt(input lene ke liye use karte hai)
let p = prompt("prompt input lega")
console.log(p);
//parseInt se convert karte hai string to number
p = Number.parseInt(p)
if (p > 18) {
    alert("you can drive")
}
else {

    alert("you can't drive")
}

// ternary operator
let a = prompt ("age kitna hai");
console.log("you can", (a < 18 ? "not drive" : "drive"));

/*practise set Q
divisable by 2 & 3 remainder gives 0*/

let num = prompt("Enter yor number")
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log("number is divible by 2 & 3")
}
else {
    console.log("number is not divible by 2 & 3")
}


//
let inputliya = prompt("enter  input");
inputliya = Number.parseInt(inputliya)