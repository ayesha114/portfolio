let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },

    sub(){
        return this.a - this.b;
    },

    div(){
        return this.a % this.b;
    },

    rem(){
        return this.a / this.b;
    },

    read (){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());
console.log(calculator.div());
console.log(calculator.rem());
