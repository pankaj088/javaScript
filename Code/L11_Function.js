
// Function is  used to sepreated the logic

const funbanya = () => {
    console.log("arrow function banya");
    return "agar kuch return kariga"
}
funbanya();
// agar kuch return bala print karana ho to variable assign kar kai karenge let variable_name = function_name()     
let assign_kiya = funbanya(" to eske under print ho jyiga ");
console.log(assign_kiya);

// add two number
let a = 10;
let b = 20;
let c = 30;
const sum = () => {
    return (x + y);
}
console.log(a + b)
console.log(b + c)
console.log(c + a)

// find mean
const mean = (x, y, z, t) => {
    return (x + y + z + t) / 4
}
console.log(mean(8, 9, 5, 7));