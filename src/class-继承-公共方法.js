//这是父类 可以理解为原型对象 prototype
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //在父类中定义方法
  sayHello(){
    console.log('大家好')
  }
}
//这是子类
// 在class类中 可以使用extends关键字,实现子类继承父类
// 语法: class 子类 extends 父类 {}
class American extends Person {
  constructor(name,age){
    super(name,age)
    //问题1: 为什么一定要在constructor中调用super
    // 因为一个子类,通过extends 关键字继承了父类,那么在子类
    //constructor 必须优先调用一下super()
    //问题2:super是什么
    // super是一个函数,而且它是父类的构造器;子类中的super就是父类中constructor引用
    // 问题3:为什么 调用super()之后,a1实例的name和age都变成undefined
    // 调用了super没有进行传值,所以undefined
  }
}
const a1 = new American('jack', 20)
console.log(a1)
class Chinese extends Person{
constructor(name,age,IDNumber){
  super(name,age)
  // 独有的 不需要挂载父类
  // 语法规范:在子类中 this只能放到super之后使用
  this.IDNumber = IDNumber
}
}
const c1 = new Chinese('王小明',25,'13545********')
console.log(c1)
console.dir(Person)