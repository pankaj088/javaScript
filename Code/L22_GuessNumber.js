
let limit = 10;  // ak limit set kar liye ye 10tak hi number guess kariga :apna comfortable ke liye
let gen_numbr = Math.random() * limit
gen_numbr = Math.floor(gen_numbr);  // yai decimal hatane ke liye

let guess = 0;
while (true) {
    let user = prompt("Enter number");
    Number.parseInt(user);

    if (user == gen_numbr) {
        console.log("Guess is correct")
        break;
    }
    else {
        console.log("wrong guess , please try gain")
    }
    guess++;
}

let score = 100 - guess;
console.log("socre is " + " = " + score)