

console.log("hey console")
console.info("info")

// time chek kar rahe hai loop kai chalne mai kitna time lagta hai
// for loop
console.time("time given");
for (let i = 0; i < 5; i++) {
    console.log("time check")
}
console.timeEnd("time given");

// while loop
console.time("time given");
let i = 0
while (i < 50) {
    console.log("time check")
    i++;
}
console.timeEnd("time given");


// yai table create kar dega
objct = { Name: "pankaj", rool: 54, college: "sit", adress: "salbari,sukna" }
console.table(objct);


// // Change the url to google.com(Redirection) if users enter a number grater than 10
let choice = prompt("Enter the number");
if (choice > 10) {
    location.href = "https://www.google.com"
}
else {
    alert("not redirected");
}

// change the background of the page to other color based on user input

let change_color = prompt("Enter color name")
document.body.style.backgroundColor = change_color