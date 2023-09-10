
// sum natural numbers using for loop
let sum = 0;
let n = prompt("Enter number");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i + 1);
}
console.log("sum of first", + n + " natural number", + sum);


// (for in) ka use keys kai liye karte hai
let objct = {
    name: "pankaj",
    roll: 54,
    age: 23,
    Home: "mahua",
}
for (let key in objct) {
    console.log("object  " + key + ": ka key print kiya :- " + objct[key]);
}

// (for of) - agar object iterable ho to ak ak kar ke print kariga
for (let b of "pankaj") {
    console.log(b);
}

// let & const block level hota hai - esko bas { block kai ander hi acess kar sakte hai}
// var ko block kai bahar bhi acess kar sakte hai


// while loop - me pahle condition check hoga uske bad block check kariga
let n = prompt("Numer do");
n = Number.parseInt(n)
let i = 0;
while (i <= n) { // jab tak(i<=n) false n ho jaye tab tak loop chalte rahiga
    console.log(i);
    i++
}

// do while loop - me pahle block run hoga uske bad condition check hoga
let n1 = prompt("Numer do");
n1 = Number.parseInt(n1)
let i1 = 10;
let i;
do {
    console.log(i1);
    i++;
} while (i <= n1);


// Q- check correct number 
let corctnum = 10;
let i;
while (i != corctnum) {
    i = prompt("enter correct number")
    console.log("try again")
}
console.log("you enter correct number");