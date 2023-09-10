
console.log("Hello world")

// function banya
function Addnum(a, b, c) {
  return a + b + c;
}
let c = Addnum(2, 4, 6);
console.log("add kiya to ", c);

// variables:- 
//var
var a = "pankaj";
var a = 54;//a=54 ka value update kar dega islye ab var ka use n karke let ka kiya jata hai 
console.log(a);

// let
let s = 8;
{

  let s = "pankaj"//or yaha let error dega kue varisble name same hai
  console.log(s);
}
console.log(s);

// const
const y = "const ko bina initlize kiye hue nhi likh sakte hai";
console.log(y);


// prctice set-Q1
// add tye string and a number

let e = "add kiya ak string "
let f = 8
console.log(e + f);

// Q2 find the type question 1
console.log(typeof (e + f));