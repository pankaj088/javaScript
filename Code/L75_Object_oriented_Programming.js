

/* javascript me kabhi bhi hm class bante hai to constructor use hota hai or yai hmaisa invoked hota hai jab class ka object banta hai */

let A = {
    Name: "Harry",
    language: "javascript",
}
console.log(A);

// yaha p ak object banya
let p = {
    mthd: () => {     // yaha run method banye
        alert("mthd");
    }
}
// yaha hm p ak prototype banye
p.__proto__ = {
    nam: "pankaj"
}


// A.run()   // yaise direct karne se error dega(Uncaught TypeError: A.run is not a function)

// islye hm yaha object ka prototype pahle set karnge
A.__proto__ = p
A.run()

console.log(A.nam)


// practice same concept
let k = {
    name: "pankaj",
    age: 22,
}

let obj = {
    methd: () => {
        alert("methd")
    }

}
obj.__proto__ = {
    job: "jobless"
}

k.__proto__ = obj
k.methd()
console.log(obj.job)


// L-76 : class(ak template hota hai) and object(jo ki template mai fill kiya jata hai)

class Railwayform {
    submit() {
        alert(" Your form is submited")
    }
    cancel() {
        alert("your form is cancel")
    }

}
let pankaj = new Railwayform()
let Deepak = new Railwayform()
pankaj.submit()
Deepak.cancel()

// Metod-2  : using this.name
class Railwayform {
    submit() {
        alert(this.name + " Your form is submited")
    }
    cancel() {
        alert(this.name + " your form is cancel")
    }
    fill(given_name) {
        this.name = given_name
    }
}

let pankaj1 = new Railwayform()
pankaj1.fill("pankaj")
pankaj1.submit()

let Deepak1 = new Railwayform()
Deepak1.fill("Deepak")
Deepak1.cancel()

let chandan = new Railwayform()
chandan.fill("chandan")
chandan.submit()

// L-77 Constructor - hmisa call hoga jab bhi kisi class ka object ka banate hai

class Railwayform {
    constructor() {
        console.log("constructor are always invoked when we create object of class")
    }

    submit() {
        alert(" Your form is submited")
    }

    cancel() {
        alert("your form is cancel")
    }

}
let pankaj = new Railwayform()
let Deepak = new Railwayform()
pankaj.submit()
Deepak.cancel()


// L-78 : inheritance

class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    run() {                                    // method banya
        console.log(this.name + " is running")
    }

    shout() {
        console.log(this.name + " is shouting")
    }
    dikhta() {
        console.log(this.color + " his color")
    }

    mthd_overding(x) {
        console.log(`This is ${x}  method overriding`)
    }

}

// Animal class se inherit kiye Cat class ko extends use karke
class Cat extends Animal {
    // constructor nhi banane se auto generate  ho jata hai
    // constructor(`arguments`){
    // super(`arguments`)
    // }

    bolti() {
        console.log(this.name + " bolti hai maueaa")
    }

    // mthd_overding(x){
    //    super. mthd_overding("_")
    //      console.log("yai extra hai")

    // }
}

let Ani = new Animal("tony", "Black")
Ani.run()
Ani.shout()
Ani.dikhta()
Ani.mthd_overding("_")

let ct = new Cat("orea", "white")
ct.run()
ct.shout()
ct.dikhta()
ct.bolti()

// ststic (`method){
// kisi class ko belog karta hai n ki kisi particular object ka 
// }

// L-82  Get & Set 

class Railwayform {
    constructor(name) {
        this._name = name
    }

    submit() {
        alert(" Get & Set ")
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

}
let rf = new Railwayform("pankaj1")
rf.submit()
console.log(rf.name)
rf.name = "Deepak1"
console.log(rf)

// istance - true or false print karta hai
console.log(rf instanceof Railwayform)

// yai false print kariga
let f = 10
console.log(f instanceof Railwayform)