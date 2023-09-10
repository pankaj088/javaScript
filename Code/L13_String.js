
//String- is collection of charceters
//strings are immutable :string kai charcter ko change nhi kr skte
let name = "pankaj kumar\n"
console.log(name);
console.log(name[5]);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(3)) //pahle 3 ko chorkar sab print kariga
console.log(name.replace("mar", "ndan")) // mar replace  ndan 
console.log(name.trim()) // trim function space ko remove kar deta 


// Template literals
let dost1 = "raghav"
let dost2 = "karan"
//  Back tic(``)
let varebanya = `${dost1} Dost hai karan ka ${dost2}`
console.log(varebanya)

// Escape(\) sequance chacters
let Eschart = 'aam\'emali'
console.log(Eschart)
console.log(Eschart.length)

//Q- extract the amount of the string  " bhola give rupes 10000"
let strg = "ram give 1000";
// let paisa = strg.slice("ram give 1000".length);
let paisa = Number.parseInt(strg.slice(8));
console.log(paisa);
console.log(typeof paisa);