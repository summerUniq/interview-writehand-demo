function Father(name) {
    this.father = name
}

Father.prototype.say = function () {
    console.log(`${this.father}: 你打篮球的样子真帅`);
}

function Child(name, parent) {
    Father.call(this, parent)
    this.child = name
}

Child.prototype = Object.create(Father.prototype)
Child.prototype.constructor = Child

Child.prototype.say = function () {
    console.log(`${this.father}, 你好啊， 我是${this.child}`);
}

let father = new Father('111')
father.say()

let child = new Child('xq', '234')
child.say()

