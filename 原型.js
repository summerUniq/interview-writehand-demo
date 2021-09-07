class A { }
class B extends A { }
class C extends B { }

console.log(new B() instanceof A);
console.log(new C() instanceof C);
console.log(new C() instanceof Object);
console.log('======================');
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);

// instanceof 可以判断实例是否是某个类或父类构建的
// Object 是一切引用类型的父类

console.log('============================');
console.log(typeof A);