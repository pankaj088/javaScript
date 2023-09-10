
//Synchronous action:-that initiate and fnish one by one
let a = prompt("Enter your name")
let b = prompt("Enter your age")
console.log(a + " is " + b + " years old")


// Asynchronous:-that we initiate now and they fnish later 
console.log("start")
setTimeout(() => {
    console.log("Asynchronous action finish kariga 3sec bad ")
}, 3000)
console.log("End")


// callbacks - Function ko as a arrugument pass kiya function mai 
function loadscript(src, callback) {
    let script = document.createElement("script")
    script.src = src;

    script.onload = function () {
        console.log("script loaded with src" + src)
    }

    document.body.appendChild(script);
    callback(src);
}

function Hello(src) {
    alert("this called Callback - " + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", Hello)



// Handling error:-we can handle callback errors by supplying error aruguments like this 
function loadscript(src, callback) {
    let script = document.createElement("script")
    script.src = src;

    script.onload = function () {
        console.log("script loaded with src" + src)
    }
    // Error handling
    script.onerror = function () {
        console.log("jab bhi error yae to yai print kariga-" + src)
        callback(new Error("src got some error "))
    }

    document.body.appendChild(script);
    callback(null, src);  // null error ko pass kiye to likhe hai 
}

function Hello(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert("this called Callback - " + src);
}

// error bala script
loadscript("https://cdn.jpankajsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", Hello)