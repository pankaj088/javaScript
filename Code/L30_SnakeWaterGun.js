

let computer1 = (user, comp_choose) => {
    if (user === comp_choose) {
        return "game has been tied"
    }
    else if (user == 's' && comp_choose == "w") {
        return "user won"
    }
    else if (user == "w" && comp_choose == "s") {
        return "computer won"
    }
    else if (user == "w" && comp_choose == "g") {
        return "user won"
    }
    else if (user == "g" && comp_choose == "w") {
        return "computer won"
    }
    else if (user == "s" && comp_choose == "g") {
        return "computer won "
    }
    else if (user == "g" && comp_choose == "s") {
        return "user won"
    }

}

let computer = Math.floor(Math.random() * 3);
let comp_choose = ' ';
if (computer == 0) {
    comp_choose = 's';
}
if (computer == 1) {
    comp_choose = 'w';
}
if (computer == 2) {
    comp_choose = "g";
}

console.log("computer has choosed", comp_choose);

let user1 = prompt("Enter your choice beween s, g,and  w");
console.log(`user choosed ${user1}`);

let result = computer1(user1, comp_choose);

console.log(result);


// document.write(result);