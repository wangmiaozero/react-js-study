class Animal {
    constructor(name,age){
        //实例属性 因为这些通过this挂载的属性,都是通过new出来的实例访问的
        this.name = name
        this.age = age
    }
    //实例方法
    say(){
        console.log('实例say方法')
    }
//--------------------------------------------------
//如果要定义静态属性,则需要和constructor,并且这个属性需要被static关键字修饰
//静态属性的定义:无法通过实例访问,只能通过类名的访问
    static info = {
        address:"上海",
        location:"宝山"
    } 
    static show(){
        console.log("静态的show方法")
    }  
}
const a1 = new Animal("小黄",2)
console.log(a1)
console.log(a1.name)//通过实例直接访问的实例属性
a1.say()//通过 实例,直接访问实例方法  实例的挂载在__proto__
console.log('====================================');
console.log(Animal.info)//通过类名,直接访问静态属性
Animal.show()//通过类名,直接访问静态方法
// 实例的 属性 或 方法，都是 通过 new 出来的实例对象来访问的；
// 静态的属性 或方法，都是 直接通过 类名 来访问的；（表现形式：通过 static 来修饰）

