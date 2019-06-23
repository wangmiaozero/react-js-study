//这是父类 可以理解为原型对象 prototype
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
//这是子类
class American extends Person {

}
const a1 = new American('jack', 20)
console.log(a1)
class Chinese extends Person{

}
const c1 = new Chinese('王小明',25)
console.log(c1)
console.dir(Person)