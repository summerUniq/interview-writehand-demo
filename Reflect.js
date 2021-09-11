const obj = {
    a: 100,
    b: 200
}

// console.log('a' in obj);
// console.log(delete obj.a);

// console.log(Reflect.has(obj, 'a'));
// console.log(Reflect.deleteProperty(obj, 'a'));

console.log(Object.getOwnPropertyNames(obj));
console.log(Reflect.ownKeys(obj));