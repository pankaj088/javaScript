

class complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    Add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }

    get real() {
        return this._real  // this - usi object pai point karta hai  // _ lagaye name collison ko avoid karne ke liye
    }

    get imaginary() {
        return this._imaginary
    }

    set real(newReal) {
        this._real = newReal
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
}

let c = new complex(10, 20)
c.real = 1
c.imaginary = 2
let d = new complex(30, 40)

c.Add(d)
console.log(`${c.real} + ${c.imaginary}`)



// Random generate password 

class Password {
    constructor() {
        console.log("Welcome  to Random generate password ")
        this.pass = " "
    }
    genratePassword(lenth) {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let numbrs = "0123456789"
        let symbol = "!@#$%^&*()-_=+[]{}|;:,.<>?"
        if (lenth < 3) {
            console.log("your password should be atleast 3 chacter ")
        }
        else {
            let i = 0;
            while (i < lenth) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbrs[Math.floor(Math.random() * numbrs.length)]
                this.pass += symbol[Math.floor(Math.random() * symbol.length)]
                i += 3

            }

            this.pass = this.pass.substr(0, lenth)
            return this.pass

        }

    }



}
let p = new Password

// console.log(p.genratePassword(10))