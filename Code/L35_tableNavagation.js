
let t = document.body.firstElementChild.firstElementChild
console.log(t);
console.log(t.rows)
console.log(t.tFoot)
console.log(t.tBodies)

document.getElementsByTagName("tr")[0].firstElementChild.style.color = "blue"
document.getElementsByTagName("tr")[0].lastElementChild.style.color = "red"


// L-35:  Setinterval and settimeout
document.write("document.write() karke kai kuch bhi likh sakte hai in javascript")
let pan = setTimeout(function () {
    alert("aelrt message dega 2sec kai bad")
}, 2000)

// clearTimeout(pan); // yai alert ko clear kar dega

let stout = prompt("Doy you want  run set time out ")

if ('No' == stout) {
    clearTimeout(pan)
}
else {
    console.log(pan)
}

// setinterval
// setInterval(function (a=10,b=20){
//   alert("alert message in every 3sec",a+b)
// },3000)

// setInterval ko celarInterval se stop karenge
// clearInterval("alert")