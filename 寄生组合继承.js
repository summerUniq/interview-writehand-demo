function Person(name) {
    this.name = name
}

Person.prototype.getName = function () {
    return this.name
}

function Child(age, name) {
    this.age = age
    Person.call(this, name)
}

Child.prototype.getAge = function () {
    return this.age
}

Child.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Child,
        enumberable: false,
        writable: true,
        configurable: true
    }
})