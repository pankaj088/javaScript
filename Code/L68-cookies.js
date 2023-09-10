
// cookies browser me direct data store karta hai
// Local storage - mere browse me data ko ak particular domain kai liye store karne mai use hota hai

console.log(document.cookie)
document.cookie = "Name = Pankaj08"  // yai ak set call hai
document.cookie = "Name = Pankaj0808"
document.cookie = "Name = Pankaj "
let key = prompt("Enter yoyr key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)

// the name = value pair : mai 4kb se jada data store nhi kar sakte



// L-69 : Local storage
let key = prompt("Enter key you want to set")
let value = prompt("enter value you want to set")

localStorage.setItem(key, value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)


if (key == "red" || key == "orange") {
    localStorage.removeItem(key)
}

// Storage ko clear karne kai liye
if (key == 0) {
    localStorage.clear()
}

// local storage - me key and value dono strings hoga