
// Array is colletcion of items
// array are variables which can hold more than one value
// arrays are mutable : array can be changed
// Array is not permitve : array is an object

let arr = [40, 50, 60, "strng"]
console.log(arr);
console.log(arr[3]);
console.log(typeof arr);

let a = arr.toString() // now a is string
console.log(typeof a);

// join()
let b = arr.join("-")
console.log(b, typeof b);

// pop()
let retrn = arr.pop() // pop returns poped elements
console.log(arr);

// push() 
let retn = arr.push(80) // push returns the  new array length
console.log(arr);

// shift() 
let x = arr.shift()  // remove kar dega array ka first element
console.log(x, arr);

// unshift
let x1 = arr.unshift(10)  // add kar dega array kai first element me
console.log(x1, arr)      // yaha x1 array ka length batyega

// delete
let dlet = delete arr[2]
console.log(arr); // but length 4 hi  batiga


// sort method - javascript me alphabatically sort karta hai islye compare()function ka use karke accending order me karte hai
let compare = (t, l) => {
    return t - l; // ascending number
    // return l-t;  descending order
}
let numbr = [8, 4, 1, 7, 9, 3]
numbr.sort(compare)
console.log(numbr);

//reverse()
let rvrse = numbr.reverse();
console.log(rvrse);

// splice()
let numbr = [8, 4, 1, 7, 9, 3, 2]
numbr.splice(2, 3, 100, 200, 400); //index 2 kai(100,200,400)add kariga
console.log(numbr);
let dltvalus = numbr.splice(2, 3, 100, 200, 400);
console.log(dltvalus);

// slice()
let numbr1 = [18, 24, 31, 47, 59, 63, 72]
let slce = numbr1.slice(3)//pahle 3number hata kai sab print kardo
// let slce = numbr1.slice(3,5)// 3 or 5 number ko chorkar sab delete kardo
console.log(slce);


// Using loop with array
let sankhya = [18, 24, 31, 47, 59, 63, 72]
for (let i = 0; i < sankhya.length; i++) {
    console.log(sankhya[i]);
}

// using forEach() - ak ak kar array kai element ko use karte hai
sankhya.forEach((argument _kuch_liya)=> {
    console.log(argument _kuch_liya);
})
console.log("\n") // use for new line

// Array.from - karne se ak ak word print kariga
let Name = "pankaj";
let A_fm = Array.from(Name)
console.log(A_fm)
console.log("\n")


// for of()
for (let item of Name) {
    console.log(item) // for of() object ko print karta hai
}

console.log("\n")

// for in()
for (let item1 in Name) {
    console.log(item1)  // for in() object kai key ko print karta hai
}


// map() - ak nya array creat karta hai
let Sankhya1 = [10, 24, 36, 32, 72, 82]
Sankhya1.map((value) => {
    console.log(value + 1)
})

//  Array filter() method :- array return karta hai
let number = [1, 0, 5, 9, 10, 6, 20]
let a = number.filter((se_barajobhi) => {
    return se_barajobhi > 5
})
console.log(a); //(,number) but orignal array change nhi hoga 

//  Array reduce() method
let number_1 = [1, 0, 5, 9, 10, 6, 20]
let rdcue = number_1.reduce((x, y) => {
    return x + y;
})
console.log(rdcue);   // reduce value return karta hai 


// practice set:
// Q1- create an array of numbers and take input from the user to add numbers to this array
let arr = [6, 4, 1, 5, 9, 7, 8, 2]
let a = prompt("input lo")
Number.parseInt(a);
arr.push(a);
console.log(arr);

//Q2- keep adding to the number array in Q1 untill 0 is add to the array

let arr = [6, 4, 1, 5, 9, 7, 8, 2]
let a;
do {
    a = prompt("input lo")
    a = Number.parseInt(a); // using parsInt()convert string to number
    arr.push(a);
} while (a != 0);

console.log(arr);