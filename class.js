class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    sayHi() {
        console.log(`姓名： ${this.name}, 学号：${this.number}`);
    }
}

class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} 吃东西`);
    }
}

class XQ extends People {
    constructor(name, age) {
        super(name)
        this.age = age
    }
    drink() {
        console.log(`${this.name} - ${this.age}喝东西`);
    }
}

const ol = new XQ('xq', 19)
ol.eat()
ol.drink()

class HB extends People {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    eat() {
        console.log(`${this.name} 不爱吃东西`);
    }
}

const o2 = new HB('hb', 2)
o2.eat()